import 'dotenv/config.js'
import '../../config/db.js'
import Author from "../Author.js"
import User from "../User.js"

let authors = [{
    name: "lucas",
    last_name: "silva",
    city: "buenos aires",
    country: "argentina",
    photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg",
    active: true,
    user_id: 'lucas@mh.com.ar'
},{
    name: "jose",
    last_name: "lopez",
    city: "villa carlos paz",
    country: "argentina",
    photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg",
    active: true,
    user_id: "jose@mh.com.ar"
},{
    name: "eric",
    city: "resistencia",
    country: "argentina",
    photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg",
    active: true,
    user_id: "eric@mh.com.ar"
},{
    name: "igna",
    last_name: "borraz",
    city: "rosario",
    country: "argentina",
    photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg",
    active: true,
    user_id: 'igna@mh.com.ar'
}]



authors.forEach(author=>add_authors(author))

async function add_authors(author) {
    let user = await User.findOne({ email:author.user_id })     
    //console.log(user._id)
    let user_id = user._id                                       
    author.user_id = user_id                                    
    await Author.create(author)
} 