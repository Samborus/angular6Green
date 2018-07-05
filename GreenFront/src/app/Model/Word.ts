import { WordType} from '../Model/WordType';

export class Word
{
    Id: number;
    English: string;
    PolishShort: string;
    PolishLong: string[]; 
    SntenceId: number[];
    Type: WordType;
    Added: Date;
}