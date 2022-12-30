import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component { 
    constructor(props) {
        super(props)
        
    }

    render() { 
        const code = this.props.tracks && this.props.tracks.map(song => {
            return <Track track={song} key={song.id} 
                    onAdd={this.props.onAdd}
                    onRemove={this.props.onRemove}
                    isRemoval={this.props.isRemoval}/>
            })
        return (
            <div className="TrackList">
               {code}
            </div>
        );
    }
}
 
export default TrackList;