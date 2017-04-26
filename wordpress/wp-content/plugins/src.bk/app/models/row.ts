/**
 * Created by MinhMan.Tran on 4/26/2017.
 */

import { Style }        from './style';
import { Column }       from './column';

export class Row{
    id: number;
    name: string;
    type: string;
    cls: string;
    addClass: string[];
    styles: Style[];
}