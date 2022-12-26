//
//  OrderHistory.swift
//  YouShop
//
//  Created by Виталий Зарубин on 26.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation
import RealmSwift

class OrderHistoryRealm: Object, Identifiable {
    
    @objc dynamic var number: String = ""
    @objc dynamic var sum: Double = 0.0
    @objc dynamic var images: String = ""

    override static func primaryKey() -> String? {
        return "number"
    }
}

extension OrderHistoryRealm {
    
    static func create(
        number: String,
        sum: Double,
        images: [String]
    ) -> OrderHistoryRealm {
        let model = OrderHistoryRealm()
        
        model.number = number
        model.sum = sum
        model.images = images.joined(separator: ",")
        
        return model
    }
    
    // get list history search or create order
    static func getModels() throws -> [OrderHistoryRealm] {
        let realm = try Realm()
        return realm.objects(OrderHistoryRealm.self).map { $0 }.reversed()
    }
    
    // get history item
    static func getModel(_ number: String) throws -> OrderHistoryRealm? {
        let realm = try Realm()
        return realm.object(ofType: OrderHistoryRealm.self, forPrimaryKey: number)
    }
    
    // save model for history
    static func saveModel(_ model: OrderHistoryRealm) throws {
        let realm = try Realm()
        if let obj = realm.object(ofType: OrderHistoryRealm.self, forPrimaryKey: model.number) {
            try realm.write {
                obj.sum = model.sum
                obj.images = model.images
            }
        } else {
            try realm.write { realm.add(model) }
        }
    }
}
