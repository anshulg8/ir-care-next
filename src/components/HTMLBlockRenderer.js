import uaeBlock from '../blocks/uae';
import tameBlock from '../blocks/tame';
import haeBlock from '../blocks/hae';
import paeBlock from '../blocks/pae';

const blockMap = {
    uaeBlock: uaeBlock,
    tameBlock: tameBlock,
    haeBlock: haeBlock,
    paeBlock: paeBlock,
};

const HTMLBlockRenderer = ({ type }) => {
    const BlockComponent = blockMap[type];
    return BlockComponent ? <BlockComponent /> : <div>Invalid block type</div>;
};

export default HTMLBlockRenderer;
