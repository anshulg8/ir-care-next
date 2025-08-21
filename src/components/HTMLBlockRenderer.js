import uaeBlock from '../blocks/uae';
import tameBlock from '../blocks/tame';
import haeBlock from '../blocks/hae';
import paeBlock from '../blocks/pae';
import whatIsHAE from '@/blog/what-is-hae';
import EnlargedProstateMumbai from '@/blog/pae-in-mumbai';

const blockMap = {
    uaeBlock: uaeBlock,
    tameBlock: tameBlock,
    haeBlock: haeBlock,
    paeBlock: paeBlock,
    whatIsHAE: whatIsHAE,
    EnlargedProstateMumbai: EnlargedProstateMumbai,
};

const HTMLBlockRenderer = ({ type }) => {
    const BlockComponent = blockMap[type];
    return BlockComponent ? <BlockComponent /> : <div>Invalid block type</div>;
};

export default HTMLBlockRenderer;
