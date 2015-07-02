function getPhotoData() {
    var imageBase = "http://wedding-919-image.appspot.com/images/";
    var thumbBase = "http://wedding-919-image.appspot.com/thumbs/";

    //var imageBase = "https://dl.dropboxusercontent.com/u/9780124/wedding919/images/";
    //var thumbBase = "https://dl.dropboxusercontent.com/u/9780124/wedding919/thumbs/";

    var photos = [
        {
            date: '2015-06-27',
            file: imageBase + '8P4A4573.jpg',
            thumb: thumbBase + '8P4A4573.jpg',
            title: '主角是桌上的樂高人物'
        },
        {
            date: '2015-06-27',
            file: imageBase + '8P4A4592.jpg',
            thumb: thumbBase + '8P4A4592.jpg',
            title: '小鹿是新郎官手工做的拼豆唷'
        },
        {
            date: '2015-06-27',
            file: imageBase + '8P4A4605.jpg',
            thumb: thumbBase + '8P4A4605.jpg',
            title: '愛看書的小孩不會變壞'
        },
        {
            date: '2015-06-27',
            file: imageBase + '8P4A4607.jpg',
            thumb: thumbBase + '8P4A4607.jpg',
            title: '老大講話有沒有在聽'
        },
        {
            date: '2015-06-28',
            file: imageBase + '8P4A4609.jpg',
            thumb: thumbBase + '8P4A4609.jpg',
            title: '有人看電腦的時間比看老婆的時間還長呀'
        },
        {
            date: '2015-06-28',
            file: imageBase + '8P4A4722.jpg',
            thumb: thumbBase + '8P4A4722.jpg',
            title: ''
        },
        {
        	date: '2015-06-28',
            file: imageBase + '8P4A4635.jpg',
            thumb: thumbBase + '8P4A4635.jpg',
            title: ''
        },
        {
        	date: '2015-06-28',
            file: imageBase + '8P4A4640.jpg',
            thumb: thumbBase + '8P4A4640.jpg',
            title: '老婆，饒了我吧'
        },
        {
        	date: '2015-06-29',
            file: imageBase + '8P4A4646.jpg',
            thumb: thumbBase + '8P4A4646.jpg',
            title: '給我過來呀！'
        },
        {
        	date: '2015-06-29',
            file: imageBase + '8P4A4659.jpg',
            thumb: thumbBase + '8P4A4659.jpg',
            title: ''
        },
        {
        	date: '2015-06-29',
            file: imageBase + '8P4A4665.jpg',
            thumb: thumbBase + '8P4A4665.jpg',
            title: '猜猜我是誰'
        },
        {
        	date: '2015-06-29',
            file: imageBase + '8P4A4670.jpg',
            thumb: thumbBase + '8P4A4670.jpg',
            title: '偶像劇經典的畫面，也是要來一下呀'
        },
        {
            date: '2015-06-30',
            file: imageBase + '8P4A4675_1.jpg',
            thumb: thumbBase + '8P4A4675_1.jpg',
            title: '你看不見我之新郎新娘不露臉'
        },
        {
        	date: '2015-06-30',
            file: imageBase + '8P4A4686.jpg',
            thumb: thumbBase + '8P4A4686.jpg',
            title: '遇見兔子先生的愛麗絲'
        },
        {
        	date: '2015-06-30',
            file: imageBase + '8P4A4689.jpg',
            thumb: thumbBase + '8P4A4689.jpg',
            title: ''
        },
        {
            date: '2015-06-30',
            file: imageBase + '8P4A4696.jpg',
            thumb: thumbBase + '8P4A4696.jpg',
            title: ''
        },
        {
            date: '2015-07-01',
            file: imageBase + '8P4A4702.jpg',
            thumb: thumbBase + '8P4A4702.jpg',
            title: ''
        },
        {
            date: '2015-07-01',
            file: imageBase + '8P4A4710.jpg',
            thumb: thumbBase + '8P4A4710.jpg',
            title: ''
        },
        {
            date: '2015-07-01',
            file: imageBase + '8P4A4721.jpg',
            thumb: thumbBase + '8P4A4721.jpg',
            title: '偷偷告訴你一個秘密—我放屁很臭'
        },
        {
        	date: '2015-07-01',
            file: imageBase + '8P4A4728.jpg',
            thumb: thumbBase + '8P4A4728.jpg',
            title: ''
        },
        {
        	date: '2015-07-02',
            file: imageBase + '8P4A4739.jpg',
            thumb: thumbBase + '8P4A4739.jpg',
            title: ''
        },
        {
            date: '2015-07-02',
            file: imageBase + '8P4A4752.jpg',
            thumb: thumbBase + '8P4A4752.jpg',
            title: '掀起了你的蓋頭來'
        },
        {
        	date: '2015-07-02',
            file: imageBase + '8P4A4766.jpg',
            thumb: thumbBase + '8P4A4766.jpg',
            title: '舉頭望明月'
        },
        {
        	date: '2015-07-02',
            file: imageBase + '8P4A4767.jpg',
            thumb: thumbBase + '8P4A4767.jpg',
            title: '低頭思故鄉'
        },
        {
            date: '2015-07-03',
            file: imageBase + '8P4A4787.jpg',
            thumb: thumbBase + '8P4A4787.jpg',
            title: ''
        },
        {
            date: '2015-07-03',
            file: imageBase + '8P4A4789.jpg',
            thumb: thumbBase + '8P4A4789.jpg',
            title: ''
        },
        {
            date: '2015-07-03',
            file: imageBase + '8P4A4797.jpg',
            thumb: thumbBase + '8P4A4797.jpg',
            title: ''
        },
        {
            date: '2015-07-03',
            file: imageBase + '8P4A4805.jpg',
            thumb: thumbBase + '8P4A4805.jpg',
            title: ''
        },
        {
            date: '2015-07-04',
            file: imageBase + '8P4A4807.jpg',
            thumb: thumbBase + '8P4A4807.jpg',
            title: ''
        },
        {
            date: '2015-07-04',
            file: imageBase + '8P4A4792.jpg',
            thumb: thumbBase + '8P4A4792.jpg',
            title: 'Follow me!'
        },
        {
            date: '2015-07-04',
            file: imageBase + '8P4A4780.jpg',
            thumb: thumbBase + '8P4A4780.jpg',
            title: ''
        },
        {
            date: '2015-07-04',
            file: imageBase + '8P4A4809.jpg',
            thumb: thumbBase + '8P4A4809.jpg',
            title: ''
        },
        {
            date: '2015-07-05',
            file: imageBase + '8P4A4814.jpg',
            thumb: thumbBase + '8P4A4814.jpg',
            title: ''
        },
        {
            date: '2015-07-05',
            file: imageBase + '8P4A4817.jpg',
            thumb: thumbBase + '8P4A4817.jpg',
            title: ''
        },
        {
            date: '2015-07-05',
            file: imageBase + '8P4A4821.jpg',
            thumb: thumbBase + '8P4A4821.jpg',
            title: ''
        },
        {
            date: '2015-07-05',
            file: imageBase + '8P4A4826.jpg',
            thumb: thumbBase + '8P4A4826.jpg',
            title: ''
        },
        {
            date: '2015-07-06',
            file: imageBase + '8P4A4837.jpg',
            thumb: thumbBase + '8P4A4837.jpg',
            title: ''
        },
        {
            date: '2015-07-06',
            file: imageBase + '8P4A4839.jpg',
            thumb: thumbBase + '8P4A4839.jpg',
            title: ''
        },
        {
            date: '2015-07-06',
            file: imageBase + '8P4A4843.jpg',
            thumb: thumbBase + '8P4A4843.jpg',
            title: ''
        },
        {
            date: '2015-07-06',
            file: imageBase + '8P4A4848.jpg',
            thumb: thumbBase + '8P4A4848.jpg',
            title: ''
        },
        {
            date: '2015-07-07',
            file: imageBase + '8P4A4860.jpg',
            thumb: thumbBase + '8P4A4860.jpg',
            title: ''
        },
        {
            date: '2015-07-07',
            file: imageBase + '8P4A4862.jpg',
            thumb: thumbBase + '8P4A4862.jpg',
            title: ''
        },
        {
            date: '2015-07-07',
            file: imageBase + '8P4A4874.jpg',
            thumb: thumbBase + '8P4A4874.jpg',
            title: ''
        },
        {
            date: '2015-07-07',
            file: imageBase + '8P4A4883.jpg',
            thumb: thumbBase + '8P4A4883.jpg',
            title: ''
        },
        {
            date: '2015-07-08',
            file: imageBase + '8P4A4886.jpg',
            thumb: thumbBase + '8P4A4886.jpg',
            title: ''
        },
        {
            date: '2015-07-08',
            file: imageBase + '8P4A4893.jpg',
            thumb: thumbBase + '8P4A4893.jpg',
            title: ''
        },
        {
            date: '2015-07-08',
            file: imageBase + '8P4A4895.jpg',
            thumb: thumbBase + '8P4A4895.jpg',
            title: ''
        },
        {
            date: '2015-07-08',
            file: imageBase + '8P4A4904.jpg',
            thumb: thumbBase + '8P4A4904.jpg',
            title: ''
        },
        {
            date: '2015-07-09',
            file: imageBase + '8P4A4909.jpg',
            thumb: thumbBase + '8P4A4909.jpg',
            title: ''
        },
        {
            date: '2015-07-09',
            file: imageBase + '8P4A4911.jpg',
            thumb: thumbBase + '8P4A4911.jpg',
            title: ''
        },
        {
            date: '2015-07-09',
            file: imageBase + '8P4A4915.jpg',
            thumb: thumbBase + '8P4A4915.jpg',
            title: ''
        },
        {
            date: '2015-07-09',
            file: imageBase + '8P4A4917.jpg',
            thumb: thumbBase + '8P4A4917.jpg',
            title: ''
        },
        {
            date: '2015-07-10',
            file: imageBase + '8P4A4920.jpg',
            thumb: thumbBase + '8P4A4920.jpg',
            title: ''
        },
        {
            date: '2015-07-10',
            file: imageBase + '8P4A4922_2.jpg',
            thumb: thumbBase + '8P4A4922_2.jpg',
            title: ''
        },
        {
            date: '2015-07-10',
            file: imageBase + '8P4A4928.jpg',
            thumb: thumbBase + '8P4A4928.jpg',
            title: ''
        },
        {
            date: '2015-07-10',
            file: imageBase + '8P4A4944.jpg',
            thumb: thumbBase + '8P4A4944.jpg',
            title: ''
        },
        {
            date: '2015-07-11',
            file: imageBase + '8P4A4945.jpg',
            thumb: thumbBase + '8P4A4945.jpg',
            title: ''
        },
        {
            date: '2015-07-11',
            file: imageBase + '8P4A4946.jpg',
            thumb: thumbBase + '8P4A4946.jpg',
            title: ''
        },
        {
            date: '2015-07-11',
            file: imageBase + '8P4A4949.jpg',
            thumb: thumbBase + '8P4A4949.jpg',
            title: ''
        },
        {
            date: '2015-07-11',
            file: imageBase + '8P4A4950.jpg',
            thumb: thumbBase + '8P4A4950.jpg',
            title: ''
        },
        {
            date: '2015-07-12',
            file: imageBase + '8P4A4957.jpg',
            thumb: thumbBase + '8P4A4957.jpg',
            title: ''
        },
        {
            date: '2015-07-12',
            file: imageBase + '8P4A4951.jpg',
            thumb: thumbBase + '8P4A4951.jpg',
            title: ''
        },
        {
            date: '2015-07-12',
            file: imageBase + '8P4A4548.jpg',
            thumb: thumbBase + '8P4A4548.jpg',
            title: ''
        },
        {
            date: '2015-07-12',
            file: imageBase + '8P4A4556.jpg',
            thumb: thumbBase + '8P4A4556.jpg',
            title: ''
        },
        {
            date: '2015-07-13',
            file: imageBase + '8P4A4602.jpg',
            thumb: thumbBase + '8P4A4602.jpg',
            title: ''
        },
        {
            date: '2015-07-13',
            file: imageBase + '8P4A4625.jpg',
            thumb: thumbBase + '8P4A4625.jpg',
            title: ''
        },
        {
            date: '2015-07-13',
            file: imageBase + '8P4A4678.jpg',
            thumb: thumbBase + '8P4A4678.jpg',
            title: ''
        },
        {
            date: '2015-07-13',
            file: imageBase + '8P4A4720.jpg',
            thumb: thumbBase + '8P4A4720.jpg',
            title: ''
        },
        {
            date: '2015-07-14',
            file: imageBase + '8P4A4604.jpg',
            thumb: thumbBase + '8P4A4604.jpg',
            title: ''
        },
        {
            date: '2015-07-14',
            file: imageBase + '8P4A4623.jpg',
            thumb: thumbBase + '8P4A4623.jpg',
            title: ''
        },
        {
            date: '2015-07-14',
            file: imageBase + '8P4A4579.jpg',
            thumb: thumbBase + '8P4A4579.jpg',
            title: ''
        },
        {
            date: '2015-07-14',
            file: imageBase + '8P4A4606.jpg',
            thumb: thumbBase + '8P4A4606.jpg',
            title: ''
        },
        {
            date: '2015-07-15',
            file: imageBase + '8P4A4658.jpg',
            thumb: thumbBase + '8P4A4658.jpg',
            title: ''
        },
        {
            date: '2015-07-15',
            file: imageBase + '8P4A4627.jpg',
            thumb: thumbBase + '8P4A4627.jpg',
            title: ''
        },
        {
            date: '2015-07-15',
            file: imageBase + '8P4A4717.jpg',
            thumb: thumbBase + '8P4A4717.jpg',
            title: ''
        },
        {
            date: '2015-07-15',
            file: imageBase + '8P4A4735.jpg',
            thumb: thumbBase + '8P4A4735.jpg',
            title: ''
        },
        {
            date: '2015-07-16',
            file: imageBase + '8P4A4755.jpg',
            thumb: thumbBase + '8P4A4755.jpg',
            title: ''
        },
        {
            date: '2015-07-16',
            file: imageBase + '8P4A4684.jpg',
            thumb: thumbBase + '8P4A4684.jpg',
            title: ''
        },
        {
            date: '2015-07-16',
            file: imageBase + '8P4A4772.jpg',
            thumb: thumbBase + '8P4A4772.jpg',
            title: ''
        },
        {
            date: '2015-07-16',
            file: imageBase + '8P4A4778.jpg',
            thumb: thumbBase + '8P4A4778.jpg',
            title: ''
        },
        {
            date: '2015-07-17',
            file: imageBase + '8P4A4780.jpg',
            thumb: thumbBase + '8P4A4780.jpg',
            title: ''
        },
        {
            date: '2015-07-17',
            file: imageBase + '8P4A4718.jpg',
            thumb: thumbBase + '8P4A4718.jpg',
            title: ''
        },
        {
            date: '2015-07-17',
            file: imageBase + '8P4A4744.jpg',
            thumb: thumbBase + '8P4A4744.jpg',
            title: ''
        },
        {
            date: '2015-07-17',
            file: imageBase + '8P4A4721.jpg',
            thumb: thumbBase + '8P4A4721.jpg',
            title: ''
        },
        {
            date: '2015-07-18',
            file: imageBase + '8P4A4750.jpg',
            thumb: thumbBase + '8P4A4750.jpg',
            title: ''
        },
    ];

    return photos;
}