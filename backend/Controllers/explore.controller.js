
require("dotenv").config();
exports.explorePopularRepos =async(req,res)=>{
    
    const {language} = req.params;

    try {
        
        const response = await  fetch(`https://api.github.com/search/repositories?q=${language}:javascript&sort=stars&order=desc&per_page=10`,{
            headers:{
                authorization:`token ${process.env.API_KEY}`
            }
       });
         console.log(response);
       const data = await response.json();

        res.status(200).json(data.items);

    } catch (error) {
        res.status(500).json({
            error:error,
            // message:error.message,
        })
    }
}