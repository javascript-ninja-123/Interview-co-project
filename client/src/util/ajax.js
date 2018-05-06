import axios from 'axios';


export class ajaxCenter{
  static async getData(url,input){
    try{
      const {data} = await axios.get(`${url}/${input}`)
      return data
    }
    catch(err){
      return err
    }
  }
}
