public class CustomLookupController {
	
    @AuraEnabled(cacheable=true)
    public static list<sObject> searchResults(string searchKey, string sObectType) {
        
        list<sObject> returnList = new List<sObject>();
        if(searchKey != '') {

            String query = 'Select Id, Name From ' + sObectType + ' Where Name LIKE  \'%' + searchKey + '%\'';
            list<sObject> queryResult = Database.query(query);
            return queryResult;
        }
        return null;   
         
    }
}