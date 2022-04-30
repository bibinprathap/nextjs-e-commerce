// react
import React from 'react';
// application
import { Search20Svg } from '~/svg';

function WidgetSearch() {
    return (
        <div className="card widget widget-search">
            <form action="" className="widget-search__form">
                <input className="widget-search__input" type="search" placeholder="Blog search..." />
                <button type="submit" className="widget-search__button">
                    <Search20Svg />
                </button>
                <div className="widget-search__field" />
            </form>
        </div>
    );
}

export default WidgetSearch;
