export default class Constants {

    public static readonly HTTP_POST: string = "POST";  

    public static readonly ALPHABET: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";  

    // ** Trello Request variables**
    
    public static readonly CARDS_ENTITY_PATH: string = "/cards"; 

    public static readonly LISTS_ENTITY_PATH: string = "/lists"; 

    public static readonly MEMBERS_ENTITY_PATH: string = "/members"; 

    public static readonly LABELS_ENTITY_PATH: string = "/labels"; 
    
    // ** Environment variables **
    
    public static readonly KEY_API_TRELLO: string | undefined = process.env.KEY_API_TRELLO;

    public static readonly TOKEN_TRELLO: string | undefined = process.env.TOKEN_TRELLO;

    public static readonly TRELLO_BASE_URL: string | undefined = process.env.TRELLO_BASE_URL;

    // ** Task type variables **

    public static readonly TYPE_ISSUE: string = "issue"; 

    public static readonly TYPE_BUG: string = "bug";

    public static readonly TYPE_TASK: string = "task";

    // ** Categoy type variables **

    public static readonly CATEGORY_MAINTENANCE: string = "Maintenance"; 

    public static readonly CATEGORY_RESEARCH: string = "Research";

    public static readonly CATEGORY_TEST: string = "Test";

    //** Label colors Ids **

    public static readonly ID_LABEL_RED: string = "5f90cc9fcdabcf46c000c7b0"; 

    public static readonly ID_LABEL_BLUE: string = "5f90cc9fcdabcf46c000c7b1";

    public static readonly ID_LABEL_ORANGE: string = "5f90cc9fcdabcf46c000c7ab";

    //** Trello entities Ids **

    public static readonly ID_TODO_LIST: string = "5f90ccc174ef1e6eac61bbd1";
    
    public static readonly ID_BUG_LABEL: string = "5f91f89ab963c953eb15cbec";
    
    public static readonly ID_TASK_LIST: string = "5f90cc9ff9e28b4d3947e5a7";

}