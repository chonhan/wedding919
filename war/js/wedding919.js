function getPhotoData() {
    var imageBase = "https://dl.dropboxusercontent.com/u/9780124/wedding919/images/";
    var thumbBase = "https://dl.dropboxusercontent.com/u/9780124/wedding919/thumbs/";
    var photos = [
        {
            date: '2015-06-23',
            file: imageBase + '8P4A4547.jpg',
            thumb: thumbBase + '8P4A4547.jpg',
            title: '系列第一張'
        },
        {
            date: '2015-06-24',
            file: imageBase + '8P4A4556.jpg',
            thumb: thumbBase + '8P4A4556.jpg',
            title: '系列第二張'
        },
        {
            date: '2015-06-25',
            file: imageBase + '8P4A4558.jpg',
            thumb: thumbBase + '8P4A4558.jpg',
            title: '系列第三張'
        },
        {
            date: '2015-06-26',
            file: imageBase + '8P4A4568.jpg',
            thumb: thumbBase + '8P4A4568.jpg',
            title: '系列第四張'
        },
    ];

    return photos;
}