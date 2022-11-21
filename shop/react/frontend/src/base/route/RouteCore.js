import * as React from "react";
import {ScrollToTop} from "../../components";
import {Route, Routes} from "react-router-dom";
import {ValueType} from "./ValueType";
import {ErrorPage} from "../../pages";
import {HttpClient} from "../constants/ConstantKMM";
import {AppCache} from "../utils/AppCache";

export default class RouteCore {

    /**
     * Constructor
     */
    constructor(conf, location, navigate, type) {
        this.conf = conf;
        this.location = location;
        this.navigate = navigate;
        this.type = type;

        this.pathname = location.pathname;
        this.backPathname = location.pathname;
    }

    update(conf, location, navigate, type) {

        this.conf = conf;
        this.location = location;
        this.navigate = navigate;
        this.type = type;

        if (this.pathname !== location.pathname) {
            this.backPathname = this.pathname
            this.pathname = location.pathname
        }
    }

    /**
     * Get path with check object or string
     *
     * @param route
     *
     * @return string
     */
    getPathFromObject(route) {
        if (typeof route === 'string' || route instanceof String) {
            return route
        } else {
            if (route === undefined) {
                return ""
            } else if (route.path !== undefined) {
                return route.path
            } else {
                return ""
            }
        }
    }

    /**
     * Open page
     *
     * @param route {String | Object}
     * @param arg
     */
    toLocation(route, ...arg) {
        const path = this.getPathFromObject(route)
        this.navigate(this.createLink(path, arg));
    }

    /**
     * Open page with replace
     *
     * @param route {String | Object}
     * @param arg
     */
    toLocationReplace(route, ...arg) {
        const path = this.getPathFromObject(route)
        this.navigate(this.createLink(path, arg), {replace: true});
    }

    /**
     * Open page with replace
     *
     * @param route {String | Object}
     * @param arg
     */
    toLocationPush(route, ...arg) {
        const path = this.getPathFromObject(route)
        this.navigate(this.createLink(path, arg), {push: true});
    }

    /**
     * Open page with new stack
     *
     * @param route {String | Object}
     * @param arg
     */
    toLocationReset(route, ...arg) {
        const path = this.getPathFromObject(route)
        this.navigate(this.createLink(path, arg), {reset: true});
    }

    /**
     * Reopen page
     *
     * @param route {String | Object}
     * @param arg
     */
    toRefreshState(route, ...arg) {
        const path = this.getPathFromObject(route)
        this.navigate(this.createLink(path, arg), {replace: true});
        this.navigate(this.createLink(path, arg));
        this.toBack();
    }

    /**
     * Open page with delay
     *
     * @param route {String | Object}
     * @param arg
     *
     * @returns {(function(): void)|*}
     */
    toLocationDelay(route, ...arg) {
        if (route === undefined) {
            return
        }
        const self = this
        const path = this.getPathFromObject(route)
        setTimeout(function () {
            if (self.isPage(path)) {
                self.navigate(0)
            } else {
                self.navigate(self.createLink(path, arg));
            }
        }, this.conf.delay);
    }

    /**
     * To back navigate
     *
     * @returns {(function(): void)|*}
     */
    toBack() {
        this.navigate(-1)
    }

    /**
     * To back navigate with delay
     *
     * @returns {(function(): void)|*}
     */
    toBackDelay() {
        const nav = this.navigate
        setTimeout(function () {
            nav(-1)
        }, this.conf.delay);
    }

    /**
     * Open page
     *
     * @param route {String | Object}
     * @param arg
     *
     * @returns {(function(): void)|*}
     */
    onClickToLocation(route, ...arg) {
        const path = this.getPathFromObject(route)
        return () => {
            this.toLocation(path, arg)
        }
    }

    /**
     * Open page with delay
     *
     * @param route {String | Object}
     * @param arg
     *
     * @returns {(function(): void)|*}
     */
    onClickToLocationDelay(route, ...arg) {
        const path = this.getPathFromObject(route)
        return () => {
            this.toLocationDelay(path, arg)
        }
    }

    /**
     * To back navigate
     *
     * @returns {(function(): void)|*}
     */
    onClickToBack() {
        return () => {
            this.toBack()
        }
    }

    /**
     * To back navigate with delay
     *
     * @returns {(function(): void)|*}
     */
    onClickToBackDelay() {
        return () => {
            this.toBackDelay()
        }
    }

    /**
     * Check location by routes
     *
     * @returns {boolean}
     */
    isPages(routes) {
        return this.isPage.apply(this, routes)
    }

    /**
     * Check location by path
     *
     * @param route
     * @returns {boolean}
     */
    isPage(...route) {

        const regexPath = /:\w+/ig;
        const regexLoc = /(\d+)|(\w+:\w+)/ig;

        for (let i = 0; i < route.length; i++) {
            const path = this.getPathFromObject(route[i])
            if (this.pathname.replaceAll(regexLoc, "__id__") === path.replaceAll(regexPath, "__id__")) {
                return true
            }
        }
        return false
    }

    /**
     * Check location by path
     *
     * @param route
     * @return {boolean}
     */
    isBack(...route) {
        const regexPath = /:\w+/ig;
        const regexLoc = /(\d+)|(\w+:\w+)/ig;

        for (let i = 0; i < route.length; i++) {
            const path = this.getPathFromObject(route[i])
            if (this.backPathname.replaceAll(regexLoc, "__id__") === path.replaceAll(regexPath, "__id__")) {
                return true
            }
        }
        return false
    }

    /**
     * Create link with arguments
     *
     * @returns {String}
     */
    createLink(route, ...arg) {

        const path = this.getPathFromObject(route)

        if (path.includes('http')) {
            return path + (arg.length === 0 ? '' : '/' + arg.join('/'));
        }

        if (!path.includes(":")) {
            return path
        }

        let result = path
        let linkArgs = []

        path.split("/").forEach((v) => {
            if (v.includes(":")) {
                linkArgs.push(v)
            }
        })

        linkArgs.forEach((linkArg, index) => {
            if (arg[index] !== undefined) {
                result = result.replace(linkArg, arg[index])
            } else {
                result = result.replace(linkArg, 'null')
            }
        })

        return result
    }

    /**
     * Render pages by conf
     *
     * @returns {JSX.Element}
     */
    render() {

        const pages = []

        Object.keys(this.conf.routes).forEach((page, pageIndex) => {

            const {path, render, match} = this.conf.routes[page]

            if (render !== undefined) {
                if (match) {
                    const clearPath = path.slice(0, path.indexOf(':'))
                    const paramsUrl = this.pathname.replace(clearPath, '').split("/")
                    const paramsPath = path.replace(clearPath, '').split("/").map((e) => e.replace(':', ''))
                    const validate = []
                    paramsPath.forEach((key, index) => {
                        const type = match[key] ? match[key] : ValueType.string
                        const value = paramsUrl[index]
                        validate.push(ValueType.validate(type, value))
                    })
                    if (validate.includes(false)) {
                        pages.push(
                            <Route
                                pageClassName={'Error-Page'}
                                key={pageIndex}
                                path={path}
                                element={<ErrorPage/>}
                            />
                        )
                    } else {
                        pages.push(render(pageIndex, path))
                    }
                } else {
                    pages.push(render(pageIndex, path))
                }
            }
        });

        return (
            <React.Fragment>
                <ScrollToTop/>
                <Routes>
                    {pages}
                    <Route
                        path="*"
                        element={
                            <ErrorPage/>
                        }
                    />
                </Routes>
            </React.Fragment>
        );
    }

    /**
     * Open outer url
     *
     * @param url
     */
    openUrl(url) {
        window.location.href = url
    }

    /**
     * Open email
     *
     * @param email
     */
    openEmail(email) {
        window.location.href = `mailto:${email}`
    }

    /**
     * Open phone
     *
     * @param phone
     */
    openPhone(phone) {
        window.location.href = `tel:${phone}`
    }

    /**
     * Open outer url
     *
     * @param url
     */
    openUrlNewTab(url) {
        window.open(url, '_blank', 'noopener,noreferrer')
    }

    /**
     * Scroll to top page
     */
    scrollToTop() {
        const el = document.getElementById("page-scroll")
        el.scrollTo(0, 0);
    }

    /**
     * Scroll to top page with smooth
     */
    scrollToTopSmooth() {
        const el = document.getElementById("page-scroll")
        el.scrollTo({top: 0, behavior: 'smooth'});
    }

    /**
     * Refresh page
     */
    refreshPage() {
        this.navigate(0);
    }

    /**
     * Refresh location
     */
    refreshLocation() {
        this.navigate(this.pathname);
    }

    /**
     * Custom logout - with check error or just logout
     */
    logout(error = null) {
        if (error == null || error.code === 401) {
            // request logout
            HttpClient.delete.logout().then(() => { }).catch(async () => { });
            // clear cache
            AppCache.clearAll()
            // reload page
            this.toRefreshState(this.conf.login)
        }
    }
}