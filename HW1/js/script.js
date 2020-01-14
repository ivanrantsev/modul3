Vue.config.devtools = true;
let webStore = new Vue ({
    el:'#app',
    data: {
        content: 'product',
        product: {
            id: 1,
            title: "ASUS TUF Gaming FX505DY-BQ068T",
            OS: 'Windows 10',
            displayResolution: '1920 x 1080 px',
            CPU: 'AMD Ryzen 5 3550H 2.1 ГГц',
            RAM: "6Гб DDR4",
            storageDevice: 'HDD 1Тб',
            grapfics: "AMD Radeon RX 560X 4 ГБ",
            image: 'https://static.eldorado.ru/photos/71/715/174/45/new_71517445_l_1560769936.jpeg',
            price: 47990,
            specifications: false,
            description: "Игровой ноутбук ASUS TUF Gaming FX505DY-BQ068T позволяет играть в любимые игры и при этом обеспечивает геймеру мобильность. Устройство способно автономно работать до 5 часов, благодаря чему его можно взять с собой в поездки или на встречи с друзьями для проведения веселых игровых батлов."
        },
        user: {
            firstname: 'Sam',
            lastname: 'Smith',
            age: '25',
            country: 'USA',
            image: 'img/user.png',
        },
        contacts: {
            tel: "+7(000) 123 4567",
            mail: "example@example.ru",
            address: 'Санкт-Петербург, пр. Невский, д.1',
        },
    },
    filters: {
        formatPrice: function(val) {
            if (!val) return '';
            return val + " " + String.fromCharCode(8381);
        }
    }
})