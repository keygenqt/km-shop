//
//  CollectionRealm.swift
//  YouShop
//
//  Created by Виталий Зарубин on 27.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation
import RealmSwift
import shared

class CollectionRealm: Object, Identifiable {
    
    @objc dynamic var id: Int = 0
    @objc dynamic var name: String = ""
    @objc dynamic var desc: String = ""
    @objc dynamic var icon: String = ""

    override static func primaryKey() -> String? {
        return "id"
    }
}

extension CollectionRealm {
    
    static func create(
        id: Int,
        name: String,
        desc: String,
        icon: String
    ) -> CollectionRealm {
        let model = CollectionRealm()
        
        model.id = id
        model.name = name
        model.desc = desc
        model.icon = icon
        
        return model
    }
    
    // get list categories
    static func getModels() throws -> [CollectionRealm] {
        let realm = try Realm()
        return realm.objects(CollectionRealm.self).map { $0 }
    }
    
    // get category item
    static func getModel(_ id: Int) throws -> CollectionRealm? {
        let realm = try Realm()
        return realm.object(ofType: CollectionRealm.self, forPrimaryKey: id)
    }
    
    // get category item
    static func saveModels(_ models: [CollectionRealm]) throws {
        let realm = try Realm()
        try realm.write {
            realm.add(models)
        }
    }
    
    // save model category
    static func saveModel(_ model: CollectionRealm) throws {
        let realm = try Realm()
        if let obj = realm.object(ofType: CollectionRealm.self, forPrimaryKey: model.id) {
            try realm.write {
                obj.name = model.name
                obj.desc = model.desc
                obj.icon = model.icon
            }
        } else {
            try realm.write { realm.add(model) }
        }
    }
    
    // clear data
    static func clear() throws {
        let realm = try Realm()
        let allUploadingObjects = realm.objects(CollectionRealm.self)
        try realm.write {
            realm.delete(allUploadingObjects)
        }
    }
    
    static func updateList(_ collections: [CollectionResponse]) throws {
        try CollectionRealm.clear()
        try CollectionRealm.saveModels(collections.map { CollectionRealm.create(
            id: Int($0.id),
            name: $0.name,
            desc: $0.desc,
            icon: $0.icon
        )})
    }
}
