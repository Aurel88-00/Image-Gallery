import { ReactNode} from 'react';
import { CollectionInterface } from './collection.interface';

export interface GalleryListProps {
    children?: ReactNode | Array<ReactNode>;
    data : CollectionInterface | any;
}