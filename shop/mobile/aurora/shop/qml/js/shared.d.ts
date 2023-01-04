type Nullable<T> = T | null | undefined
declare const __doNotImplementIt: unique symbol
type __doNotImplementIt = typeof __doNotImplementIt
export namespace com.keygenqt.shop {
    class Greeting {
        constructor();
        greeting(): string;
    }
}
export namespace com.keygenqt.shop.data.requests {
    class AdminCreateRequest {
        constructor(email: string, role: string, password: string);
        get email(): string;
        get role(): string;
        get password(): string;
        component1(): string;
        component2(): string;
        component3(): string;
        copy(email?: string, role?: string, password?: string): com.keygenqt.shop.data.requests.AdminCreateRequest;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static AdminCreateRequest_init_$Create$(seen1: number, email: Nullable<string>, role: Nullable<string>, password: Nullable<string>, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.keygenqt.shop.data.requests.AdminCreateRequest;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<com.keygenqt.shop.data.requests.AdminCreateRequest> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<com.keygenqt.shop.data.requests.AdminCreateRequest> */;
    }
    class AdminUpdateRequest {
        constructor(role: string, password: Nullable<string>);
        get role(): string;
        get password(): Nullable<string>;
        component1(): string;
        component2(): Nullable<string>;
        copy(role?: string, password?: Nullable<string>): com.keygenqt.shop.data.requests.AdminUpdateRequest;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static AdminUpdateRequest_init_$Create$(seen1: number, role: Nullable<string>, password: Nullable<string>, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.keygenqt.shop.data.requests.AdminUpdateRequest;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<com.keygenqt.shop.data.requests.AdminUpdateRequest> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<com.keygenqt.shop.data.requests.AdminUpdateRequest> */;
    }
}
export namespace com.keygenqt.shop.data.requests {
    class CategoryRequest {
        constructor(key: string, image: string, name: string, desc: string, isPublished: boolean, uploads: Array<string>);
        get key(): string;
        get image(): string;
        get name(): string;
        get desc(): string;
        get isPublished(): boolean;
        get uploads(): Array<string>;
        component1(): string;
        component2(): string;
        component3(): string;
        component4(): string;
        component5(): boolean;
        component6(): Array<string>;
        copy(key?: string, image?: string, name?: string, desc?: string, isPublished?: boolean, uploads?: Array<string>): com.keygenqt.shop.data.requests.CategoryRequest;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static CategoryRequest_init_$Create$(seen1: number, key: Nullable<string>, image: Nullable<string>, name: Nullable<string>, desc: Nullable<string>, isPublished: boolean, uploads: Nullable<Array<string>>, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.keygenqt.shop.data.requests.CategoryRequest;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<com.keygenqt.shop.data.requests.CategoryRequest> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<com.keygenqt.shop.data.requests.CategoryRequest> */;
    }
    class CategoryStateRequest {
        constructor(isPublished: boolean);
        get isPublished(): boolean;
        component1(): boolean;
        copy(isPublished?: boolean): com.keygenqt.shop.data.requests.CategoryStateRequest;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static CategoryStateRequest_init_$Create$(seen1: number, isPublished: boolean, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.keygenqt.shop.data.requests.CategoryStateRequest;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<com.keygenqt.shop.data.requests.CategoryStateRequest> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<com.keygenqt.shop.data.requests.CategoryStateRequest> */;
    }
}
export namespace com.keygenqt.shop.data.requests {
    class CollectionRequest {
        constructor(key: string, icon: string, name: string, desc: string, isPublished: boolean);
        get key(): string;
        get icon(): string;
        get name(): string;
        get desc(): string;
        get isPublished(): boolean;
        component1(): string;
        component2(): string;
        component3(): string;
        component4(): string;
        component5(): boolean;
        copy(key?: string, icon?: string, name?: string, desc?: string, isPublished?: boolean): com.keygenqt.shop.data.requests.CollectionRequest;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static CollectionRequest_init_$Create$(seen1: number, key: Nullable<string>, icon: Nullable<string>, name: Nullable<string>, desc: Nullable<string>, isPublished: boolean, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.keygenqt.shop.data.requests.CollectionRequest;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<com.keygenqt.shop.data.requests.CollectionRequest> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<com.keygenqt.shop.data.requests.CollectionRequest> */;
    }
    class CollectionStateRequest {
        constructor(isPublished: boolean);
        get isPublished(): boolean;
        component1(): boolean;
        copy(isPublished?: boolean): com.keygenqt.shop.data.requests.CollectionStateRequest;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static CollectionStateRequest_init_$Create$(seen1: number, isPublished: boolean, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.keygenqt.shop.data.requests.CollectionStateRequest;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<com.keygenqt.shop.data.requests.CollectionStateRequest> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<com.keygenqt.shop.data.requests.CollectionStateRequest> */;
    }
}
export namespace com.keygenqt.shop.data.requests {
    class FileRequest {
        constructor(name: string, contentType: string, file: Int8Array);
        get name(): string;
        get contentType(): string;
        get file(): Int8Array;
        component1(): string;
        component2(): string;
        component3(): Int8Array;
        copy(name?: string, contentType?: string, file?: Int8Array): com.keygenqt.shop.data.requests.FileRequest;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static FileRequest_init_$Create$(seen1: number, name: Nullable<string>, contentType: Nullable<string>, file: Nullable<Int8Array>, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.keygenqt.shop.data.requests.FileRequest;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<com.keygenqt.shop.data.requests.FileRequest> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<com.keygenqt.shop.data.requests.FileRequest> */;
    }
}
export namespace com.keygenqt.shop.data.requests {
    class LoginRequest {
        constructor(email: string, password: string);
        get email(): string;
        get password(): string;
        component1(): string;
        component2(): string;
        copy(email?: string, password?: string): com.keygenqt.shop.data.requests.LoginRequest;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static LoginRequest_init_$Create$(seen1: number, email: Nullable<string>, password: Nullable<string>, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.keygenqt.shop.data.requests.LoginRequest;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<com.keygenqt.shop.data.requests.LoginRequest> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<com.keygenqt.shop.data.requests.LoginRequest> */;
    }
}
export namespace com.keygenqt.shop.data.requests {
    class MessageRequest {
        constructor(fname: string, lname: string, email: string, phone: string, message: string);
        get fname(): string;
        get lname(): string;
        get email(): string;
        get phone(): string;
        get message(): string;
        component1(): string;
        component2(): string;
        component3(): string;
        component4(): string;
        component5(): string;
        copy(fname?: string, lname?: string, email?: string, phone?: string, message?: string): com.keygenqt.shop.data.requests.MessageRequest;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static MessageRequest_init_$Create$(seen1: number, fname: Nullable<string>, lname: Nullable<string>, email: Nullable<string>, phone: Nullable<string>, message: Nullable<string>, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.keygenqt.shop.data.requests.MessageRequest;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<com.keygenqt.shop.data.requests.MessageRequest> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<com.keygenqt.shop.data.requests.MessageRequest> */;
    }
    class MessageStateRequest {
        constructor(isChecked: boolean);
        get isChecked(): boolean;
        component1(): boolean;
        copy(isChecked?: boolean): com.keygenqt.shop.data.requests.MessageStateRequest;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static MessageStateRequest_init_$Create$(seen1: number, isChecked: boolean, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.keygenqt.shop.data.requests.MessageStateRequest;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<com.keygenqt.shop.data.requests.MessageStateRequest> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<com.keygenqt.shop.data.requests.MessageStateRequest> */;
    }
}
export namespace com.keygenqt.shop.data.requests {
    class OrderNoteRequest {
        constructor(note: string);
        get note(): string;
        component1(): string;
        copy(note?: string): com.keygenqt.shop.data.requests.OrderNoteRequest;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static OrderNoteRequest_init_$Create$(seen1: number, note: Nullable<string>, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.keygenqt.shop.data.requests.OrderNoteRequest;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<com.keygenqt.shop.data.requests.OrderNoteRequest> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<com.keygenqt.shop.data.requests.OrderNoteRequest> */;
    }
    class OrderCustomerRequest {
        constructor(email: string, phone: string, address: string);
        get email(): string;
        get phone(): string;
        get address(): string;
        component1(): string;
        component2(): string;
        component3(): string;
        copy(email?: string, phone?: string, address?: string): com.keygenqt.shop.data.requests.OrderCustomerRequest;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static OrderCustomerRequest_init_$Create$(seen1: number, email: Nullable<string>, phone: Nullable<string>, address: Nullable<string>, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.keygenqt.shop.data.requests.OrderCustomerRequest;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<com.keygenqt.shop.data.requests.OrderCustomerRequest> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<com.keygenqt.shop.data.requests.OrderCustomerRequest> */;
    }
    class OrderStateRequest {
        constructor(state: com.keygenqt.shop.data.responses.OrderState);
        get state(): com.keygenqt.shop.data.responses.OrderState;
        component1(): com.keygenqt.shop.data.responses.OrderState;
        copy(state?: com.keygenqt.shop.data.responses.OrderState): com.keygenqt.shop.data.requests.OrderStateRequest;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static OrderStateRequest_init_$Create$(seen1: number, state: Nullable<com.keygenqt.shop.data.responses.OrderState>, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.keygenqt.shop.data.requests.OrderStateRequest;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<com.keygenqt.shop.data.requests.OrderStateRequest> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<com.keygenqt.shop.data.requests.OrderStateRequest> */;
    }
    class OrderCreateRequest {
        constructor(email: string, phone: string, address: string, products: Array<com.keygenqt.shop.data.requests.OrderProductRequest>);
        get email(): string;
        get phone(): string;
        get address(): string;
        get products(): Array<com.keygenqt.shop.data.requests.OrderProductRequest>;
        component1(): string;
        component2(): string;
        component3(): string;
        component4(): Array<com.keygenqt.shop.data.requests.OrderProductRequest>;
        copy(email?: string, phone?: string, address?: string, products?: Array<com.keygenqt.shop.data.requests.OrderProductRequest>): com.keygenqt.shop.data.requests.OrderCreateRequest;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static OrderCreateRequest_init_$Create$(seen1: number, email: Nullable<string>, phone: Nullable<string>, address: Nullable<string>, products: Nullable<Array<com.keygenqt.shop.data.requests.OrderProductRequest>>, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.keygenqt.shop.data.requests.OrderCreateRequest;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<com.keygenqt.shop.data.requests.OrderCreateRequest> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<com.keygenqt.shop.data.requests.OrderCreateRequest> */;
    }
    class OrderProductRequest {
        constructor(productID: number, count: number, price: number);
        get productID(): number;
        get count(): number;
        get price(): number;
        component1(): number;
        component2(): number;
        component3(): number;
        copy(productID?: number, count?: number, price?: number): com.keygenqt.shop.data.requests.OrderProductRequest;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static OrderProductRequest_init_$Create$(seen1: number, productID: number, count: number, price: number, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.keygenqt.shop.data.requests.OrderProductRequest;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<com.keygenqt.shop.data.requests.OrderProductRequest> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<com.keygenqt.shop.data.requests.OrderProductRequest> */;
    }
}
export namespace com.keygenqt.shop.data.requests {
    abstract class OrderProduct {
        private constructor();
        static get NEWEST(): com.keygenqt.shop.data.requests.OrderProduct & {
            get name(): "NEWEST";
            get ordinal(): 0;
        };
        static get LOW(): com.keygenqt.shop.data.requests.OrderProduct & {
            get name(): "LOW";
            get ordinal(): 1;
        };
        static get HEIGHT(): com.keygenqt.shop.data.requests.OrderProduct & {
            get name(): "HEIGHT";
            get ordinal(): 2;
        };
        static values(): Array<com.keygenqt.shop.data.requests.OrderProduct>;
        static valueOf(value: string): com.keygenqt.shop.data.requests.OrderProduct;
        get name(): "NEWEST" | "LOW" | "HEIGHT";
        get ordinal(): 0 | 1 | 2;
    }
    class ProductRequest {
        constructor(categoryID: number, image1: string, image2: string, image3: string, name: string, description: string, price: number, isPublished: boolean, collections: Array<number>, uploads: Array<string>);
        get categoryID(): number;
        get image1(): string;
        get image2(): string;
        get image3(): string;
        get name(): string;
        get description(): string;
        get price(): number;
        get isPublished(): boolean;
        get collections(): Array<number>;
        get uploads(): Array<string>;
        component1(): number;
        component2(): string;
        component3(): string;
        component4(): string;
        component5(): string;
        component6(): string;
        component7(): number;
        component8(): boolean;
        component9(): Array<number>;
        component10(): Array<string>;
        copy(categoryID?: number, image1?: string, image2?: string, image3?: string, name?: string, description?: string, price?: number, isPublished?: boolean, collections?: Array<number>, uploads?: Array<string>): com.keygenqt.shop.data.requests.ProductRequest;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static ProductRequest_init_$Create$(seen1: number, categoryID: number, image1: Nullable<string>, image2: Nullable<string>, image3: Nullable<string>, name: Nullable<string>, description: Nullable<string>, price: number, isPublished: boolean, collections: Nullable<Array<number>>, uploads: Nullable<Array<string>>, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.keygenqt.shop.data.requests.ProductRequest;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<com.keygenqt.shop.data.requests.ProductRequest> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<com.keygenqt.shop.data.requests.ProductRequest> */;
    }
    class ProductStateRequest {
        constructor(isPublished: boolean);
        get isPublished(): boolean;
        component1(): boolean;
        copy(isPublished?: boolean): com.keygenqt.shop.data.requests.ProductStateRequest;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static ProductStateRequest_init_$Create$(seen1: number, isPublished: boolean, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.keygenqt.shop.data.requests.ProductStateRequest;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<com.keygenqt.shop.data.requests.ProductStateRequest> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<com.keygenqt.shop.data.requests.ProductStateRequest> */;
    }
}
export namespace com.keygenqt.shop.data.responses {
    abstract class AdminRole {
        private constructor();
        static get GUEST(): com.keygenqt.shop.data.responses.AdminRole & {
            get name(): "GUEST";
            get ordinal(): 0;
        };
        static get MANAGER(): com.keygenqt.shop.data.responses.AdminRole & {
            get name(): "MANAGER";
            get ordinal(): 1;
        };
        static get ADMIN(): com.keygenqt.shop.data.responses.AdminRole & {
            get name(): "ADMIN";
            get ordinal(): 2;
        };
        static values(): Array<com.keygenqt.shop.data.responses.AdminRole>;
        static valueOf(value: string): com.keygenqt.shop.data.responses.AdminRole;
        get name(): "GUEST" | "MANAGER" | "ADMIN";
        get ordinal(): 0 | 1 | 2;
    }
    class AdminResponse {
        constructor(id: number, email: string, role: com.keygenqt.shop.data.responses.AdminRole);
        get id(): number;
        get email(): string;
        get role(): com.keygenqt.shop.data.responses.AdminRole;
        component1(): number;
        component2(): string;
        component3(): com.keygenqt.shop.data.responses.AdminRole;
        copy(id?: number, email?: string, role?: com.keygenqt.shop.data.responses.AdminRole): com.keygenqt.shop.data.responses.AdminResponse;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static AdminResponse_init_$Create$(seen1: number, id: number, email: Nullable<string>, role: Nullable<com.keygenqt.shop.data.responses.AdminRole>, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.keygenqt.shop.data.responses.AdminResponse;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<com.keygenqt.shop.data.responses.AdminResponse> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<com.keygenqt.shop.data.responses.AdminResponse> */;
    }
}
export namespace com.keygenqt.shop.data.responses {
    class CategoryResponse {
        constructor(id: number, key: string, name: string, desc: string, image: string, isPublished: boolean, createAt: string, updateAt: string, products?: Nullable<Array<com.keygenqt.shop.data.responses.ProductResponse>>, uploads?: Nullable<Array<com.keygenqt.shop.data.responses.UploadResponse>>);
        get id(): number;
        get key(): string;
        get name(): string;
        get desc(): string;
        get image(): string;
        get isPublished(): boolean;
        get createAt(): string;
        get updateAt(): string;
        get products(): Nullable<Array<com.keygenqt.shop.data.responses.ProductResponse>>;
        get uploads(): Nullable<Array<com.keygenqt.shop.data.responses.UploadResponse>>;
        component1(): number;
        component2(): string;
        component3(): string;
        component4(): string;
        component5(): string;
        component6(): boolean;
        component7(): string;
        component8(): string;
        component9(): Nullable<Array<com.keygenqt.shop.data.responses.ProductResponse>>;
        component10(): Nullable<Array<com.keygenqt.shop.data.responses.UploadResponse>>;
        copy(id?: number, key?: string, name?: string, desc?: string, image?: string, isPublished?: boolean, createAt?: string, updateAt?: string, products?: Nullable<Array<com.keygenqt.shop.data.responses.ProductResponse>>, uploads?: Nullable<Array<com.keygenqt.shop.data.responses.UploadResponse>>): com.keygenqt.shop.data.responses.CategoryResponse;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static CategoryResponse_init_$Create$(seen1: number, id: number, key: Nullable<string>, name: Nullable<string>, desc: Nullable<string>, image: Nullable<string>, isPublished: boolean, createAt: Nullable<string>, updateAt: Nullable<string>, products: Nullable<Array<com.keygenqt.shop.data.responses.ProductResponse>>, uploads: Nullable<Array<com.keygenqt.shop.data.responses.UploadResponse>>, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.keygenqt.shop.data.responses.CategoryResponse;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<com.keygenqt.shop.data.responses.CategoryResponse> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<com.keygenqt.shop.data.responses.CategoryResponse> */;
    }
}
export namespace com.keygenqt.shop.data.responses {
    class CollectionResponse {
        constructor(id: number, key: string, name: string, desc: string, icon: string, isPublished: boolean, createAt: string, updateAt: string);
        get id(): number;
        get key(): string;
        get name(): string;
        get desc(): string;
        get icon(): string;
        get isPublished(): boolean;
        get createAt(): string;
        get updateAt(): string;
        component1(): number;
        component2(): string;
        component3(): string;
        component4(): string;
        component5(): string;
        component6(): boolean;
        component7(): string;
        component8(): string;
        copy(id?: number, key?: string, name?: string, desc?: string, icon?: string, isPublished?: boolean, createAt?: string, updateAt?: string): com.keygenqt.shop.data.responses.CollectionResponse;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static CollectionResponse_init_$Create$(seen1: number, id: number, key: Nullable<string>, name: Nullable<string>, desc: Nullable<string>, icon: Nullable<string>, isPublished: boolean, createAt: Nullable<string>, updateAt: Nullable<string>, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.keygenqt.shop.data.responses.CollectionResponse;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<com.keygenqt.shop.data.responses.CollectionResponse> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<com.keygenqt.shop.data.responses.CollectionResponse> */;
    }
}
export namespace com.keygenqt.shop.data.responses {
    class DashboardCountResponse {
        constructor(count: number, percent: number);
        get count(): number;
        get percent(): number;
        component1(): number;
        component2(): number;
        copy(count?: number, percent?: number): com.keygenqt.shop.data.responses.DashboardCountResponse;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static DashboardCountResponse_init_$Create$(seen1: number, count: number, percent: number, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.keygenqt.shop.data.responses.DashboardCountResponse;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<com.keygenqt.shop.data.responses.DashboardCountResponse> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<com.keygenqt.shop.data.responses.DashboardCountResponse> */;
    }
    class DashboardAmountResponse {
        constructor(amount: number);
        get amount(): number;
        component1(): number;
        copy(amount?: number): com.keygenqt.shop.data.responses.DashboardAmountResponse;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static DashboardAmountResponse_init_$Create$(seen1: number, amount: number, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.keygenqt.shop.data.responses.DashboardAmountResponse;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<com.keygenqt.shop.data.responses.DashboardAmountResponse> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<com.keygenqt.shop.data.responses.DashboardAmountResponse> */;
    }
    class DashboardChartResponse {
        constructor(series1: Array<number>, series2: Array<number>);
        get series1(): Array<number>;
        get series2(): Array<number>;
        component1(): Array<number>;
        component2(): Array<number>;
        copy(series1?: Array<number>, series2?: Array<number>): com.keygenqt.shop.data.responses.DashboardChartResponse;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static DashboardChartResponse_init_$Create$(seen1: number, series1: Nullable<Array<number>>, series2: Nullable<Array<number>>, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.keygenqt.shop.data.responses.DashboardChartResponse;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<com.keygenqt.shop.data.responses.DashboardChartResponse> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<com.keygenqt.shop.data.responses.DashboardChartResponse> */;
    }
}
export namespace com.keygenqt.shop.data.responses {
    class MessageResponse {
        constructor(id: number, lname: string, fname: string, email: string, phone: string, message: string, isChecked: boolean, createAt: string, updateAt: string);
        get id(): number;
        get lname(): string;
        get fname(): string;
        get email(): string;
        get phone(): string;
        get message(): string;
        get isChecked(): boolean;
        get createAt(): string;
        get updateAt(): string;
        component1(): number;
        component2(): string;
        component3(): string;
        component4(): string;
        component5(): string;
        component6(): string;
        component7(): boolean;
        component8(): string;
        component9(): string;
        copy(id?: number, lname?: string, fname?: string, email?: string, phone?: string, message?: string, isChecked?: boolean, createAt?: string, updateAt?: string): com.keygenqt.shop.data.responses.MessageResponse;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static MessageResponse_init_$Create$(seen1: number, id: number, lname: Nullable<string>, fname: Nullable<string>, email: Nullable<string>, phone: Nullable<string>, message: Nullable<string>, isChecked: boolean, createAt: Nullable<string>, updateAt: Nullable<string>, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.keygenqt.shop.data.responses.MessageResponse;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<com.keygenqt.shop.data.responses.MessageResponse> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<com.keygenqt.shop.data.responses.MessageResponse> */;
    }
}
export namespace com.keygenqt.shop.data.responses {
    abstract class OrderState {
        private constructor();
        static get NEW(): com.keygenqt.shop.data.responses.OrderState & {
            get name(): "NEW";
            get ordinal(): 0;
        };
        static get PENDING(): com.keygenqt.shop.data.responses.OrderState & {
            get name(): "PENDING";
            get ordinal(): 1;
        };
        static get COMPLETED(): com.keygenqt.shop.data.responses.OrderState & {
            get name(): "COMPLETED";
            get ordinal(): 2;
        };
        static get CANCELED(): com.keygenqt.shop.data.responses.OrderState & {
            get name(): "CANCELED";
            get ordinal(): 3;
        };
        static values(): Array<com.keygenqt.shop.data.responses.OrderState>;
        static valueOf(value: string): com.keygenqt.shop.data.responses.OrderState;
        get name(): "NEW" | "PENDING" | "COMPLETED" | "CANCELED";
        get ordinal(): 0 | 1 | 2 | 3;
    }
    class OrderProductResponse {
        constructor(price: number, count: number, sum: number, product: com.keygenqt.shop.data.responses.ProductResponse);
        get price(): number;
        get count(): number;
        get sum(): number;
        get product(): com.keygenqt.shop.data.responses.ProductResponse;
        component1(): number;
        component2(): number;
        component3(): number;
        component4(): com.keygenqt.shop.data.responses.ProductResponse;
        copy(price?: number, count?: number, sum?: number, product?: com.keygenqt.shop.data.responses.ProductResponse): com.keygenqt.shop.data.responses.OrderProductResponse;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static OrderProductResponse_init_$Create$(seen1: number, price: number, count: number, sum: number, product: Nullable<com.keygenqt.shop.data.responses.ProductResponse>, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.keygenqt.shop.data.responses.OrderProductResponse;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<com.keygenqt.shop.data.responses.OrderProductResponse> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<com.keygenqt.shop.data.responses.OrderProductResponse> */;
    }
    class OrderResponse {
        constructor(id: number, number: string, email: string, phone: string, address: string, note: string, state: com.keygenqt.shop.data.responses.OrderState, sum: number, products: Array<com.keygenqt.shop.data.responses.OrderProductResponse>, createAt: string, updateAt: string);
        get id(): number;
        get number(): string;
        get email(): string;
        get phone(): string;
        get address(): string;
        get note(): string;
        get state(): com.keygenqt.shop.data.responses.OrderState;
        get sum(): number;
        get products(): Array<com.keygenqt.shop.data.responses.OrderProductResponse>;
        get createAt(): string;
        get updateAt(): string;
        component1(): number;
        component2(): string;
        component3(): string;
        component4(): string;
        component5(): string;
        component6(): string;
        component7(): com.keygenqt.shop.data.responses.OrderState;
        component8(): number;
        component9(): Array<com.keygenqt.shop.data.responses.OrderProductResponse>;
        component10(): string;
        component11(): string;
        copy(id?: number, number?: string, email?: string, phone?: string, address?: string, note?: string, state?: com.keygenqt.shop.data.responses.OrderState, sum?: number, products?: Array<com.keygenqt.shop.data.responses.OrderProductResponse>, createAt?: string, updateAt?: string): com.keygenqt.shop.data.responses.OrderResponse;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static OrderResponse_init_$Create$(seen1: number, id: number, number: Nullable<string>, email: Nullable<string>, phone: Nullable<string>, address: Nullable<string>, note: Nullable<string>, state: Nullable<com.keygenqt.shop.data.responses.OrderState>, sum: number, products: Nullable<Array<com.keygenqt.shop.data.responses.OrderProductResponse>>, createAt: Nullable<string>, updateAt: Nullable<string>, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.keygenqt.shop.data.responses.OrderResponse;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<com.keygenqt.shop.data.responses.OrderResponse> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<com.keygenqt.shop.data.responses.OrderResponse> */;
    }
}
export namespace com.keygenqt.shop.data.responses {
    class ProductCountResponse {
        constructor(count: number);
        get count(): number;
        component1(): number;
        copy(count?: number): com.keygenqt.shop.data.responses.ProductCountResponse;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static ProductCountResponse_init_$Create$(seen1: number, count: number, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.keygenqt.shop.data.responses.ProductCountResponse;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<com.keygenqt.shop.data.responses.ProductCountResponse> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<com.keygenqt.shop.data.responses.ProductCountResponse> */;
    }
    class ProductPageResponse {
        constructor(pages: number, products: Array<com.keygenqt.shop.data.responses.ProductResponse>);
        get pages(): number;
        get products(): Array<com.keygenqt.shop.data.responses.ProductResponse>;
        component1(): number;
        component2(): Array<com.keygenqt.shop.data.responses.ProductResponse>;
        copy(pages?: number, products?: Array<com.keygenqt.shop.data.responses.ProductResponse>): com.keygenqt.shop.data.responses.ProductPageResponse;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static ProductPageResponse_init_$Create$(seen1: number, pages: number, products: Nullable<Array<com.keygenqt.shop.data.responses.ProductResponse>>, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.keygenqt.shop.data.responses.ProductPageResponse;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<com.keygenqt.shop.data.responses.ProductPageResponse> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<com.keygenqt.shop.data.responses.ProductPageResponse> */;
    }
    class ProductResponse {
        constructor(id: number, category: com.keygenqt.shop.data.responses.CategoryResponse, categories?: Nullable<Array<com.keygenqt.shop.data.responses.CategoryResponse>>, image1: string, image2: Nullable<string>, image3: Nullable<string>, name: string, description: string, price: number, isPublished: boolean, createAt: string, updateAt: string, collections?: Nullable<Array<com.keygenqt.shop.data.responses.CollectionResponse>>, uploads?: Nullable<Array<com.keygenqt.shop.data.responses.UploadResponse>>);
        get id(): number;
        get category(): com.keygenqt.shop.data.responses.CategoryResponse;
        get categories(): Nullable<Array<com.keygenqt.shop.data.responses.CategoryResponse>>;
        get image1(): string;
        get image2(): Nullable<string>;
        get image3(): Nullable<string>;
        get name(): string;
        get description(): string;
        get price(): number;
        get isPublished(): boolean;
        get createAt(): string;
        get updateAt(): string;
        get collections(): Nullable<Array<com.keygenqt.shop.data.responses.CollectionResponse>>;
        get uploads(): Nullable<Array<com.keygenqt.shop.data.responses.UploadResponse>>;
        component1(): number;
        component2(): com.keygenqt.shop.data.responses.CategoryResponse;
        component3(): Nullable<Array<com.keygenqt.shop.data.responses.CategoryResponse>>;
        component4(): string;
        component5(): Nullable<string>;
        component6(): Nullable<string>;
        component7(): string;
        component8(): string;
        component9(): number;
        component10(): boolean;
        component11(): string;
        component12(): string;
        component13(): Nullable<Array<com.keygenqt.shop.data.responses.CollectionResponse>>;
        component14(): Nullable<Array<com.keygenqt.shop.data.responses.UploadResponse>>;
        copy(id?: number, category?: com.keygenqt.shop.data.responses.CategoryResponse, categories?: Nullable<Array<com.keygenqt.shop.data.responses.CategoryResponse>>, image1?: string, image2?: Nullable<string>, image3?: Nullable<string>, name?: string, description?: string, price?: number, isPublished?: boolean, createAt?: string, updateAt?: string, collections?: Nullable<Array<com.keygenqt.shop.data.responses.CollectionResponse>>, uploads?: Nullable<Array<com.keygenqt.shop.data.responses.UploadResponse>>): com.keygenqt.shop.data.responses.ProductResponse;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static ProductResponse_init_$Create$(seen1: number, id: number, category: Nullable<com.keygenqt.shop.data.responses.CategoryResponse>, categories: Nullable<Array<com.keygenqt.shop.data.responses.CategoryResponse>>, image1: Nullable<string>, image2: Nullable<string>, image3: Nullable<string>, name: Nullable<string>, description: Nullable<string>, price: number, isPublished: boolean, createAt: Nullable<string>, updateAt: Nullable<string>, collections: Nullable<Array<com.keygenqt.shop.data.responses.CollectionResponse>>, uploads: Nullable<Array<com.keygenqt.shop.data.responses.UploadResponse>>, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.keygenqt.shop.data.responses.ProductResponse;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<com.keygenqt.shop.data.responses.ProductResponse> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<com.keygenqt.shop.data.responses.ProductResponse> */;
    }
    class ProductPricesResponse {
        constructor(min: number, max: number);
        get min(): number;
        get max(): number;
        component1(): number;
        component2(): number;
        copy(min?: number, max?: number): com.keygenqt.shop.data.responses.ProductPricesResponse;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static ProductPricesResponse_init_$Create$(seen1: number, min: number, max: number, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.keygenqt.shop.data.responses.ProductPricesResponse;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<com.keygenqt.shop.data.responses.ProductPricesResponse> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<com.keygenqt.shop.data.responses.ProductPricesResponse> */;
    }
}
export namespace com.keygenqt.shop.data.responses {
    class UploadResponse {
        constructor(id: number, fileName: string, fileMime: string, originalFileName: string, createAt: string);
        get id(): number;
        get fileName(): string;
        get fileMime(): string;
        get originalFileName(): string;
        get createAt(): string;
        component1(): number;
        component2(): string;
        component3(): string;
        component4(): string;
        component5(): string;
        copy(id?: number, fileName?: string, fileMime?: string, originalFileName?: string, createAt?: string): com.keygenqt.shop.data.responses.UploadResponse;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static UploadResponse_init_$Create$(seen1: number, id: number, fileName: Nullable<string>, fileMime: Nullable<string>, originalFileName: Nullable<string>, createAt: Nullable<string>, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.keygenqt.shop.data.responses.UploadResponse;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<com.keygenqt.shop.data.responses.UploadResponse> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<com.keygenqt.shop.data.responses.UploadResponse> */;
    }
}
export namespace com.keygenqt.shop.exception {
    class ResponseException /* extends kotlin.RuntimeException */ {
        constructor(code: number, message: string, validate?: Nullable<Array<com.keygenqt.shop.exception.ValidateViolation>>);
        get code(): number;
        get validate(): Nullable<Array<com.keygenqt.shop.exception.ValidateViolation>>;
        component1(): number;
        component2(): string;
        component3(): Nullable<Array<com.keygenqt.shop.exception.ValidateViolation>>;
        copy(code?: number, message?: string, validate?: Nullable<Array<com.keygenqt.shop.exception.ValidateViolation>>): com.keygenqt.shop.exception.ResponseException;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export namespace com.keygenqt.shop.exception {
    class ValidateViolation {
        constructor(filed: string, errors: Array<string>);
        get filed(): string;
        get errors(): Array<string>;
        component1(): string;
        component2(): Array<string>;
        copy(filed?: string, errors?: Array<string>): com.keygenqt.shop.exception.ValidateViolation;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static ValidateViolation_init_$Create$(seen1: number, filed: Nullable<string>, errors: Nullable<Array<string>>, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.keygenqt.shop.exception.ValidateViolation;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<com.keygenqt.shop.exception.ValidateViolation> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<com.keygenqt.shop.exception.ValidateViolation> */;
    }
}
export namespace com.keygenqt.shop.utils.constants {
    const AppConstants: {
        get format(): typeof com.keygenqt.shop.utils.constants.impl.FormatConstants;
        get links(): typeof com.keygenqt.shop.utils.constants.impl.LinksConstants;
        get other(): typeof com.keygenqt.shop.utils.constants.impl.OtherConstants;
    };
}
export namespace com.keygenqt.shop.utils.constants.impl {
    const FormatConstants: {
        get DATE_SHORT(): string;
    };
}
export namespace com.keygenqt.shop.utils.constants.impl {
    const LinksConstants: {
        get API_URL(): string;
        get API_DEBUG_URL(): string;
        get API_DEBUG_ANDROID_URL(): string;
        get URL_MAP(): string;
    };
}
export namespace com.keygenqt.shop.utils.constants.impl {
    const OtherConstants: {
        get PAGE_LIMIT(): number;
        get CONTACT_EMAIL(): string;
        get CONTACT_PHONE(): string;
        get CONTACT_TG(): string;
    };
}
export namespace com.keygenqt.shop.services {
    class ServiceRequestJS {
        constructor(apiUrl: string);
        get get(): com.keygenqt.shop.services.impl.GetRequestPromise;
        get put(): com.keygenqt.shop.services.impl.PutRequestPromise;
        get post(): com.keygenqt.shop.services.impl.PostRequestPromise;
        get delete(): com.keygenqt.shop.services.impl.DeleteRequestPromise;
    }
}
export namespace com.keygenqt.shop.services.impl {
    class DeleteRequestPromise {
        constructor(client: any/* com.keygenqt.shop.services.ServiceRequest */);
        logout(): Promise<void>;
        admin(id: number): Promise<void>;
    }
}
export namespace com.keygenqt.shop.services.impl {
    class GetRequestPromise {
        constructor(client: any/* com.keygenqt.shop.services.ServiceRequest */);
        categories(): Promise<any/* kotlin.collections.List<com.keygenqt.shop.data.responses.CategoryResponse> */>;
        categoriesPublished(): Promise<any/* kotlin.collections.List<com.keygenqt.shop.data.responses.CategoryResponse> */>;
        collection(id: number): Promise<com.keygenqt.shop.data.responses.CollectionResponse>;
        collections(): Promise<any/* kotlin.collections.List<com.keygenqt.shop.data.responses.CollectionResponse> */>;
        collectionsPublished(): Promise<any/* kotlin.collections.List<com.keygenqt.shop.data.responses.CollectionResponse> */>;
        category(id: number): Promise<com.keygenqt.shop.data.responses.CategoryResponse>;
        messages(): Promise<any/* kotlin.collections.List<com.keygenqt.shop.data.responses.MessageResponse> */>;
        message(id: number): Promise<com.keygenqt.shop.data.responses.MessageResponse>;
        products(): Promise<any/* kotlin.collections.List<com.keygenqt.shop.data.responses.ProductResponse> */>;
        productsPublished(page: number, order: string, range: Array<number>, categories: Array<number>, collections: Array<number>): Promise<com.keygenqt.shop.data.responses.ProductPageResponse>;
        productsCountPublished(categories: Array<number>, collections: Array<number>): Promise<com.keygenqt.shop.data.responses.ProductCountResponse>;
        productsPurchased(excludeID: number): Promise<any/* kotlin.collections.List<com.keygenqt.shop.data.responses.ProductResponse> */>;
        productsPublishedByIDs(ids: Array<number>): Promise<any/* kotlin.collections.List<com.keygenqt.shop.data.responses.ProductResponse> */>;
        product(id: number): Promise<com.keygenqt.shop.data.responses.ProductResponse>;
        prices(): Promise<com.keygenqt.shop.data.responses.ProductPricesResponse>;
        orders(filter: com.keygenqt.shop.data.responses.OrderState): Promise<any/* kotlin.collections.List<com.keygenqt.shop.data.responses.OrderResponse> */>;
        orderByNumber(number: string): Promise<com.keygenqt.shop.data.responses.OrderResponse>;
        order(id: number): Promise<com.keygenqt.shop.data.responses.OrderResponse>;
        admins(): Promise<any/* kotlin.collections.List<com.keygenqt.shop.data.responses.AdminResponse> */>;
        admin(id: number): Promise<com.keygenqt.shop.data.responses.AdminResponse>;
        dashboardMadeOrders(): Promise<com.keygenqt.shop.data.responses.DashboardCountResponse>;
        dashboardOrdersCompleted(): Promise<com.keygenqt.shop.data.responses.DashboardCountResponse>;
        dashboardTotalEarnings(): Promise<com.keygenqt.shop.data.responses.DashboardAmountResponse>;
        dashboardSeller(): Promise<any/* kotlin.collections.List<com.keygenqt.shop.data.responses.OrderResponse> */>;
        dashboardChart(): Promise<com.keygenqt.shop.data.responses.DashboardChartResponse>;
    }
}
export namespace com.keygenqt.shop.services.impl {
    class PostRequestPromise {
        constructor(client: any/* com.keygenqt.shop.services.ServiceRequest */);
        login(request: com.keygenqt.shop.data.requests.LoginRequest): Promise<com.keygenqt.shop.data.responses.AdminResponse>;
        message(request: com.keygenqt.shop.data.requests.MessageRequest): Promise<com.keygenqt.shop.data.responses.MessageResponse>;
        category(request: com.keygenqt.shop.data.requests.CategoryRequest): Promise<com.keygenqt.shop.data.responses.CategoryResponse>;
        collection(request: com.keygenqt.shop.data.requests.CollectionRequest): Promise<com.keygenqt.shop.data.responses.CollectionResponse>;
        product(request: com.keygenqt.shop.data.requests.ProductRequest): Promise<com.keygenqt.shop.data.responses.ProductResponse>;
        admin(request: com.keygenqt.shop.data.requests.AdminCreateRequest): Promise<com.keygenqt.shop.data.responses.AdminResponse>;
        uploads(files: Array<com.keygenqt.shop.data.requests.FileRequest>): Promise<any/* kotlin.collections.List<com.keygenqt.shop.data.responses.UploadResponse> */>;
        orderCreate(request: com.keygenqt.shop.data.requests.OrderCreateRequest): Promise<com.keygenqt.shop.data.responses.OrderResponse>;
    }
}
export namespace com.keygenqt.shop.services.impl {
    class PutRequestPromise {
        constructor(client: any/* com.keygenqt.shop.services.ServiceRequest */);
        messageState(id: number, request: com.keygenqt.shop.data.requests.MessageStateRequest): Promise<com.keygenqt.shop.data.responses.MessageResponse>;
        category(id: number, request: com.keygenqt.shop.data.requests.CategoryRequest): Promise<com.keygenqt.shop.data.responses.CategoryResponse>;
        categoryState(id: number, request: com.keygenqt.shop.data.requests.CategoryStateRequest): Promise<com.keygenqt.shop.data.responses.CategoryResponse>;
        collection(id: number, request: com.keygenqt.shop.data.requests.CollectionRequest): Promise<com.keygenqt.shop.data.responses.CollectionResponse>;
        collectionState(id: number, request: com.keygenqt.shop.data.requests.CollectionStateRequest): Promise<com.keygenqt.shop.data.responses.CollectionResponse>;
        product(id: number, request: com.keygenqt.shop.data.requests.ProductRequest): Promise<com.keygenqt.shop.data.responses.ProductResponse>;
        productState(id: number, request: com.keygenqt.shop.data.requests.ProductStateRequest): Promise<com.keygenqt.shop.data.responses.ProductResponse>;
        admin(id: number, request: com.keygenqt.shop.data.requests.AdminUpdateRequest): Promise<com.keygenqt.shop.data.responses.AdminResponse>;
        orderCustomer(id: number, request: com.keygenqt.shop.data.requests.OrderCustomerRequest): Promise<com.keygenqt.shop.data.responses.OrderResponse>;
        orderNote(id: number, request: com.keygenqt.shop.data.requests.OrderNoteRequest): Promise<com.keygenqt.shop.data.responses.OrderResponse>;
        orderState(id: number, request: com.keygenqt.shop.data.requests.OrderStateRequest): Promise<com.keygenqt.shop.data.responses.OrderResponse>;
    }
}
export as namespace shared;