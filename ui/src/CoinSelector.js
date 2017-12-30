import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/check-box-outline-blank';

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
    color: 'rgb(255, 255, 255)',
  },
};

const tilesData = [
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

const SingleLineCoinSelector = () => (
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={1.5}>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="rgb(255,255,255)" /></IconButton>}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 60%,rgba(0,0,0,0) 100%)"
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default SingleLineCoinSelector;