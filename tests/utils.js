class Utils {


    static async switchWindowByPageTitle(page, locator, targetTitle){

        let targetPage; 

        const [newPage]= await Promise.all([
            page.context().waitForEvent('page'),
            page.locator(locator).click()
        ]) // this line will wait for the events to open new page. 
       
        await newPage.waitForLoadState('domcontentloaded'); // once new page is opened, it will wait until content is loaded. 

        let pages=await newPage.context().pages(); // we get all the pages from the context. 

        for(let page of pages){ // we loop all the pages
            let target=await page.title(); 
            if(target === targetTitle){ // if the page title is equels to the targetTitle
                targetPage=page; // then we assign targePage as the page that has the targetTitle. 
                break; 
            }
        }
        return targetPage; 
        
    }

}
module.exports=Utils; 