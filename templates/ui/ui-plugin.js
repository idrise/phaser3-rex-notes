import ObjectFactory from './ObjectFactory.js';
import RoundRectangleFactory from './roundrectangle/RoundRectangleFactory.js';

import SizerFactory from './sizer/SizerFactory.js';
import GridSizer from './gridsizer/GridSizerFactory.js';

import LabelFactory from './label/LabelFactory.js';
import DialogFactory from './dialog/DialogFactory.js';
import TabsFactory from './tabs/TabsFactory.js';
import SliderFactory from './slider/SliderFactory.js';
import GridTableFactory from './gridtable/GridTableFactory.js';
//import TabsTableFactory from './tabstable/TabsTableFactory.js';

class UIPlugin extends Phaser.Plugins.ScenePlugin {
    constructor(scene, pluginManager) {
        super(scene, pluginManager);

        this.add = new ObjectFactory(scene);
    }
}

export default UIPlugin;