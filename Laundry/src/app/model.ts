export interface timeSlotFilter{
    idx:number;
    value:number;
}
export interface pricing{
    type:string,
    itemName:string,
    price:string
}

export interface ratingData{
    userName:string;
    userRating:number;
    userFeedback:string;
}


export enum contact{
    NUMBER='7633020190',
    ALTNUMBER='9818762188',
    ADDRESS='shop no-ug-05,Near Barat Ghar Kuleshra,Greater Noida,GB Nagar,201306',
    EMAIL='support@greenocleaner.in'
}
export const services=['Laundry','Dry Cleaning','Steam Ironing','Sofa Cleaning','Carpet Cleaning','Shoe Spa','Polishing'];

export const items:pricing[]=[
    {type:'Mens Wear',itemName:'Shirt',price:'90'},
    {type:'Mens Wear',itemName:'T-Shirt',price:'90'},
    {type:'Mens Wear',itemName:'Trouser',price:'90'},
    {type:'Mens Wear',itemName:'Jeans',price:'90'},
    {type:'Mens Wear',itemName:'Lower',price:'90'},
    {type:'Mens Wear',itemName:'Pajama',price:'90'},
    {type:'Mens Wear',itemName:'Kurta',price:'120-200'},
    {type:'Mens Wear',itemName:'White/Silk Shirt',price:'100'},
    {type:'Mens Wear',itemName:'Full Jacket',price:'180 - 240'},
    {type:'Mens Wear',itemName:'Full Huddy',price:'150 - 200'},
    {type:'Mens Wear',itemName:'Full Sweat Shirt',price:'150 - 200'},
    {type:'Mens Wear',itemName:'Full Sweater',price:'150 - 200'},
    {type:'Mens Wear',itemName:'Half Jacket',price:'120'},
    {type:'Mens Wear',itemName:'Half Huddy',price:'120'},
    {type:'Mens Wear',itemName:'Half Sweat Shirt',price:'120'},
    {type:'Mens Wear',itemName:'Half Sweater',price:'120'},
    {type:'Mens Wear',itemName:'Leather Jacket',price:'300-600'},
    {type:'Mens Wear',itemName:'2 PC Suit Gents',price:'250'},
    {type:'Mens Wear',itemName:'3 PC Suit Gents',price:'300'},
    {type:'Mens Wear',itemName:'Coat',price:'200'},
    {type:'Mens Wear',itemName:'Sherwani',price:'300-500'},
    {type:'Mens Wear',itemName:'Over Coat',price:'250-300'},
    {type:'Mens Wear',itemName:'shots',price:'70'},
    {type:'Mens Wear',itemName:'Tie',price:'40'},
    {type:'Mens Wear',itemName:'Sports Shoe',price:'250'},
    {type:'Mens Wear',itemName:'Casual Shoe',price:'200'},
    {type:'Mens Wear',itemName:'Leather Shoe',price:'400-500'},
    {type:'Mens Wear',itemName:'Leather Bag Purs',price:'250-1000'},
    {type:'Mens Wear',itemName:'Cap',price:'50'},
    {type:'Mens Wear',itemName:'Woolen Cap',price:'80'},
    {type:'Womens Wear',itemName:'Cotton Saree',price:'150'},
    {type:'Womens Wear',itemName:'Banarasi Saree',price:'200'},
    {type:'Womens Wear',itemName:'Heavy Saree',price:'250-500'},
    {type:'Womens Wear',itemName:'Blouse',price:'50-80'},
    {type:'Womens Wear',itemName:'Kurti',price:'120-300'},
    {type:'Womens Wear',itemName:'2 PC Suit Ladies',price:'200-250'},
    {type:'Womens Wear',itemName:'2 PC Suit Ladies',price:'250-300'},
    {type:'Womens Wear',itemName:'Scaff/Dupatta',price:'80-120'},
    {type:'Womens Wear',itemName:'Top',price:'100-200'},
    {type:'Womens Wear',itemName:'Dress',price:'150-300'},
    {type:'Womens Wear',itemName:'Gown',price:'200-400'},
    {type:'Womens Wear',itemName:'Frok',price:'150 - 200'},
    {type:'Womens Wear',itemName:'Salwar/Laggies',price:'120'},
    {type:'Womens Wear',itemName:'3 PC Party Lehanga',price:'350-700'},
    {type:'Womens Wear',itemName:'Bridal Lehnga',price:'800-3000'},
    {type:'Womens Wear',itemName:'Stol',price:'120'},
    {type:'Womens Wear',itemName:'Sawal',price:'150'},
    {type:'Womens Wear',itemName:'Saree Charak',price:'100'},
    {type:'Carpet',itemName:'Single Blanket(SL)',price:'250'},
    {type:'Carpet',itemName:'Double Blanket(SL)',price:'350'},
    {type:'Carpet',itemName:'Single Blanket(DL)',price:'250'},
    {type:'Carpet',itemName:'Double Blanket(DL)',price:'350'},
    {type:'Carpet',itemName:'Double Quilt ( Double Comforter )',price:'400-500'},
    {type:'Carpet',itemName:'Curtain',price:'160 per panel'},
    {type:'Carpet',itemName:'Curtain Tissue/Net',price:'180 per panel'},
    {type:'Carpet',itemName:'Curtain Double Lining',price:'230 per panel'},
    {type:'Carpet',itemName:'Sofa',price:'300 per seat'},
    {type:'Carpet',itemName:'Double Bedsheet',price:'180'},
    {type:'Carpet',itemName:'Single Bedsheet',price:'120'},
    {type:'Carpet',itemName:'Double Bedsheet Woolen',price:'200'},
    {type:'Carpet',itemName:'Single Bedsheet Woolen',price:'150'},
    {type:'Carpet',itemName:'Hand Towel',price:'50'},
    {type:'Carpet',itemName:'Bath Towel',price:'80'},
    {type:'Carpet',itemName:'Trolley Bag',price:'400-1000'},
    {type:'Carpet',itemName:'Teddy Wear',price:'350-1500'},
]
export const WomensWear=items.filter(obj=>obj.type==='Womens Wear');
export const MensWear=items.filter(obj=>obj.type==='Mens Wear');
export const Carpet=items.filter(obj=>obj.type==='Carpet');

export const typeToSearch=[
    {type:"WomensWear",value:WomensWear},
    {type:"MensWear",value:MensWear},
    {type:"Carpet",value:Carpet}
]

