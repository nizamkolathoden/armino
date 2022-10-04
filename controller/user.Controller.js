const Cart = require("../model/cart");
module.exports = {
  addToCart: async (req, res) => {
    try {
      const { productId, quntity ,price,productType} = req.body;
      if (!productId || !quntity||!price||!productType)
        return res.json({ error: "Please Enter all the Fields" });
        const userId=req.payload
        let totalPrice=price*quntity;
        
        if(productType=='Notebook'&&price==100&&quntity>3&&totalPrice>=500){
            console.log("hello");
           let discount= totalPrice*6/100
           if(discount>60)
            discount=60
            totalPrice-=discount
            console.log(totalPrice);
           }else if(productType=='Sanitizer'&&price==250&&quntity>10&&totalPrice>=3000){
                totalPrice-=100
           }else if(productType=='Bag'&&price==1500&&quntity>2){
            return res.json({error:"Can't Add Bag More Than 2 "})
           }

        
      const addedToCart = await new Cart({
        productId,
        quntity,
        userId,
        totalPrice
        
      }).save();
      res.json(addedToCart)
    } catch (err) {
      console.log(err);
    }
  },

  cart:async (req, res) => {
    try {
        const id = req.payload
        const cartThing = await Cart.find({userId:id})
        let payAmount=0;
      
      cartThing.forEach(d=>{
        payAmount+=d.totalPrice
      })
      console.log(payAmount);
      if(payAmount>10000){
        console.log("PRIME123 Activated");
        return res.json({
            cartThing,
            Total:payAmount,
            promoCode:"PRIME123",
            discount:123,
            PayAmount:payAmount-123

        })
        
      }
      res.json({
        cartThing,
        Total:payAmount,
        promoCode:"nill",
        PayAmount:payAmount

    })
    } catch (err) {
      console.log(err);
    }
  },
};
