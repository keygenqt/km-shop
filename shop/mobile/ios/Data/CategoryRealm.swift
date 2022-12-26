//
//  CategoryRealm.swift
//  YouShop
//
//  Created by Виталий Зарубин on 27.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation
import RealmSwift
import shared

class CategoryRealm: Object, Identifiable {
    
    @objc dynamic var id: Int = 0
    @objc dynamic var name: String = ""
    @objc dynamic var desc: String = ""
    @objc dynamic var image: String = ""

    override static func primaryKey() -> String? {
        return "id"
    }
}

extension CategoryRealm {
    
    static func create(
        id: Int,
        name: String,
        desc: String,
        image: String
    ) -> CategoryRealm {
        let model = CategoryRealm()
        
        model.id = id
        model.name = name
        model.desc = desc
        model.image = image
        
        return model
    }
    
    // get list categories
    static func getModels() throws -> [CategoryRealm] {
        let realm = try Realm()
        return realm.objects(CategoryRealm.self).map { $0 }
    }
    
    // get category item
    static func getModel(_ id: Int) throws -> CategoryRealm? {
        let realm = try Realm()
        return realm.object(ofType: CategoryRealm.self, forPrimaryKey: id)
    }
    
    // get category item
    static func saveModels(_ models: [CategoryRealm]) throws {
        let realm = try Realm()
        try realm.write {
            realm.add(models)
        }
    }
    
    // save model category
    static func saveModel(_ model: CategoryRealm) throws {
        let realm = try Realm()
        if let obj = realm.object(ofType: CategoryRealm.self, forPrimaryKey: model.id) {
            try realm.write {
                obj.name = model.name
                obj.desc = model.desc
                obj.image = model.image
            }
        } else {
            try realm.write { realm.add(model) }
        }
    }
    
    // clear data
    static func clear() throws {
        let realm = try Realm()
        let allUploadingObjects = realm.objects(CategoryRealm.self)
        try realm.write {
            realm.delete(allUploadingObjects)
        }
    }
    
    static func updateList(_ categries: [CategoryResponse]) throws {
        try CategoryRealm.clear()
        try CategoryRealm.saveModels(categries.map { CategoryRealm.create(
            id: Int($0.id),
            name: $0.name,
            desc: $0.desc,
            image: $0.image
        )})
    }
}
