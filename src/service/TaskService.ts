import { Request } from "express";
import Constants from "../constants/Constants";
const fetch = require('node-fetch');


export class TaskService {

    private readonly membersId: string[] = ["5f90cc015e0f674084e33b20","59eb66a1d449bcf3409866c3"];

    constructor() {
    }

    public create = async (req: Request) => {
        const endpoint = this.buildEndpoint(req.body);
        
        return fetch(`${Constants.TRELLO_BASE_URL}${Constants.CARDS_ENTITY_PATH}?${endpoint}`, {
            method: Constants.HTTP_POST
        })
    }

    private buildEndpoint = (body: any): string => {
        let endpoint: string =`key=${Constants.KEY_API_TRELLO}&token=${Constants.TOKEN_TRELLO}`;

        switch (body.type) {
            case Constants.TYPE_ISSUE:
                endpoint = `&name=${body.title}&desc=${body.description}&idList=${Constants.ID_TODO_LIST}`;
                break;
            case Constants.TYPE_BUG:
                let index:number = this.generateRandonNumber(0,this.membersId.length);
                endpoint = `&name=${this.buildTitle(body.title)}&desc=${body.description}&idMembers=${this.membersId[index]}&idList=${Constants.ID_TODO_LIST}&idLabels=${Constants.ID_BUG_LABEL}`;
                break;
            case  Constants.TYPE_TASK:
                endpoint = `&name=${body.title}&idLabels=${this.buildLabels(body.category)}&idList=${Constants.ID_TASK_LIST}`;
                break;
            default:
                break;
        }
        return endpoint;
    }
    
    private buildLabels=(category:string):string[] => {
        let labels:string [] =[];

        switch (category) {
            case Constants.CATEGORY_MAINTENANCE:
                labels.push(Constants.ID_LABEL_RED);
                break;
            case Constants.CATEGORY_RESEARCH:
                labels.push(Constants.ID_LABEL_BLUE);
                break;
            case  Constants.CATEGORY_TEST:
                labels.push(Constants.ID_LABEL_ORANGE);
                break;
            default:
                break;
        }
        return labels;
    }

    private generateRandonNumber(min:number, max:number) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }

    private buildTitle = (requestTitle:string): string =>{
        let title:string;
        let number:number = this.generateRandonNumber(0,50);
        let word:string = this.generateRandomString(5);

        title = `bug--${word}--${number}`;
        return title;
    }

    private generateRandomString =(length:number):string => {
        let word:string = '';
        let alphabetLength:number = Constants.ALPHABET.length;

        for ( var i = 0; i < length; i++ ) {
            word += Constants.ALPHABET.charAt(Math.floor(Math.random() * alphabetLength));
        }
        return word;
     }

}
