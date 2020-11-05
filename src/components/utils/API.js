import axios from "axios";
const BASEURL = "https://dog.ceo/api/breed/";
const BREED = "/images";
const ALL = "https://dog.ceo/api/breeds/list/all";
const RANDOM = "https://dog.ceo/api/breeds/image/random";

export default {
  search: function(type, query) {
      if(type === "all"){
        /*
        {
            "message": {
                "akita": [],
                "appenzeller": [],
                "australian": [
                    "shepherd"
                ]
            },
            "status": "success"
        }
   
        */
        return (axios.get(ALL));
      }
      else if(type === "breed"){
        /*
            {
                "message": [
                    "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
                    "https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg",
                    "https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg"
                ],
                "status": "success"
            }
        */
        return (axios.get(BASEURL + query + BREED));
      }
      else{
        /*
            {
                "message": "https://images.dog.ceo/breeds/retriever-chesapeake/n02099849_4726.jpg",
                "status": "success"
            }
        */
        return (axios.get(RANDOM));
      }
  }
};
