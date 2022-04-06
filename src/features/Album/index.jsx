import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList'

AlbumFeature.propTypes = {
    albumList: PropTypes.array.isRequired
};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhạc hoa thịnh hành',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/5/7/9/6/5796657ae619cde14a0e79b304df3c53.jpg'
        },
        {
            id: 2,
            name: 'Pop Viet ngay nay',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/7/3/e/0/73e00f5cec14756298433447eab5229f.jpg'
        },
        {
            id: 3,
            name: 'acoustic chill',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/a/4/3/5/a4357a8ba399962dfec021efce9b1afc.jpg'
        }
    ];
    return (
        <div>
            <h2>Có thể bạn sẽ thích đấy</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;