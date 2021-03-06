import React from 'react';

class NewsItem extends React.Component {
    render() {
        return (
            <div>
                <span className={'icon-' + this.props.icon} />
                {this.props.date + ' - ' + this.props.text}
            </div>);        
    }
}

NewsItem.displayName = 'NewsItem';
NewsItem.propTypes = {
    date: React.PropTypes.date,
    icon: React.PropTypes.oneOf(['military', 'intrigue', 'power']),
    text: React.PropTypes.string
};

export default NewsItem;
