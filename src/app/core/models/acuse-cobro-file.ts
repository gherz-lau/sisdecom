import { AcuseCobro } from './acuse-cobro';

export class AcuseCobroFile {
    name: string;
    isSuccess: boolean;
    isLoading: boolean;
    content: Array<AcuseCobro>;
    fileSize: number;

    constructor() {
        this.fileSize = -1;
        this.content = new Array<AcuseCobro>();
    }
}
