import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/check-box-outline-blank';
import Checkbox from 'material-ui/Checkbox';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 0, 0)',
  },
};

class SingleLineCoinSelector extends React.Component {
  constructor() {
    super();
    this.state = {
      coins: this.loadCoins(),
      selected_coins: []
    }
  }

  loadCoins() {
    return [
      {
        img: 'https://png.icons8.com/dusk/2x/85cbf8/bitcoin.png',
        title: 'Bitcoin',
      },
      {
        img: 'https://png.icons8.com/dusk/2x/85cbf8/bitcoin.png',
        title: 'Bitcoin',
      },
      {
        img: 'https://png.icons8.com/dusk/2x/85cbf8/bitcoin.png',
        title: 'Bitcoin',
      },
    ];
  }

  render() {
    return (
      <div style={styles.root}>
        <GridList style={styles.gridList} cols={1.5}>
        {this.state.coins.map((tile) => (
          <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<Checkbox iconStyle={styles.titleStyle} />}
          titleStyle={styles.titleStyle}
          titleBackground="none"
          >
          <img src={tile.img} alt="{tile.title}" />
          </GridTile>
        ))}
        </GridList>
      </div>
    );
  }
}

export default SingleLineCoinSelector;