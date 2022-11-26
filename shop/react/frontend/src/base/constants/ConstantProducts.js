import {ConstantImages} from "./ConstantImages";
import {ConstantCollections} from "./ConstantCollections";

/**
 * Groups
 */
export const ConstantProducts = [
    {
        id: 1,
        image: 'https://shop-api.keygenqt.com/api/uploads/cedcf6a9-4b59-411f-9785-7a00214b240a.png',
        title: 'Expensive',
        desc: 'Bow for the bourgeoisie. If you are rich, you can buy thieves for a unique style.',
        price: '3100.20',
        collections: []
    },
    {
        id: 2,
        image: 'https://shop-api.keygenqt.com/api/uploads/6618ddd8-fc9a-4da4-834e-cd81e90bcec4.png',
        title: 'Bow Beauty',
        desc: 'Top bows for top girls.',
        price: '2100.90',
        collections: [
            ConstantCollections[0].name,
            ConstantCollections[1].name,
        ]
    },
    {
        id: 3,
        image: 'https://shop-api.keygenqt.com/api/uploads/86757d7a-d85b-4b33-aa50-77d2193fb8f3.png',
        title: 'Nautical bow',
        desc: 'Do you love the sea?',
        price: '1300.00',
        collections: [
            ConstantCollections[0].name,
            ConstantCollections[2].name,
        ]
    },
    {
        id: 4,
        image: 'https://shop-api.keygenqt.com/api/uploads/10bc15cb-e956-4759-968c-7c419fd53832.png',
        title: 'Kit',
        desc: 'Kit for girls who love bows.',
        price: '3200.20',
        collections: [
            ConstantCollections[0].name,
            ConstantCollections[2].name,
        ]
    },
    {
        id: 5,
        image: 'https://shop-api.keygenqt.com/api/uploads/bc9437cf-ebda-4846-9a2c-d454c95a5df8.png',
        title: 'Wedding',
        desc: 'Dress the little one more beautiful than the bride.',
        price: '2800.70',
        collections: [
            ConstantCollections[3].name,
            ConstantCollections[4].name,
        ]
    },
    {
        id: 6,
        image: ConstantImages.common.DSC_0009,
        title: 'Mickey',
        desc: 'Disney stylized bows.',
        price: '900.50',
        collections: [
            ConstantCollections[2].name,
            ConstantCollections[3].name,
        ]
    },
    {
        id: 7,
        image: ConstantImages.common.DSC_0004,
        title: 'Headband beauty',
        desc: 'Cool headband for cool little ones.',
        price: '3200.20',
        collections: [
            ConstantCollections[0].name,
            ConstantCollections[2].name,
            ConstantCollections[4].name,
        ]
    },
    {
        id: 8,
        image: ConstantImages.common.DSC_0007,
        title: 'Sweet Bow',
        desc: 'Bows for the sweet tooth.',
        price: '300.50',
        collections: [
            ConstantCollections[4].name
        ]
    },
];