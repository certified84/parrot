const businessInfo = `Figma ipsum component variant main layer. Shadow rotate community image rotate group vertical pixel main background. Text overflow overflow thumbnail rotate underline. Team scrolling library follower link italic. Subtract pencil inspect polygon star blur union pencil. Stroke prototype plugin star opacity. Flows inspect community reesizing group rotate. Effect main fill connection layer arrange vertical horizontal. Layer align stroke pen mask style.
Rotate object asset subtract opacity duplicate ellipse italic. Strikethrough pen boolean pixel layer. Variant pencil project edit edit mask hand. Asset link bold asset distribute. Community layer boolean image editor connection invite scale connection. Rotate reesizing figjam boolean comment stroke pencil undo. Move layer outline mask strikethrough. Link arrange connection comment flows create community. Style clip device component bullet. Link line list fill plugin.
Undo align style stroke group reesizing project. Scale scrolling link content pencil. Duplicate bullet team thumbnail clip edit polygon figjam selection. Content layer pixel ellipse vertical variant share rectangle. Pen ellipse pencil font flatten draft undo main. Pen line invite object team variant. Bold project pen style image. Variant editor background group text text image thumbnail overflow frame. Underline rectangle font arrange effect flows invite arrange. Library content duplicate pencil ellipse asset. Export outline prototype layer fill invite connection auto scale. Figma rotate pixel shadow strikethrough editor distribute layer hand.
Font object variant overflow bold text figjam. Frame library clip line reesizing group group flatten main shadow. Link pencil connection rotate team. Auto move subtract scale layer. Editor link select stroke vector arrow reesizing shadow figma. Star shadow selection fill comment.`;

const businesses: IBusiness[] = [
  {
    id: "0",
    name: "Pounded Yam Village",
    verified: true,
    image: "https://source.unsplash.com/random/?yam,restaurant",
    rating: 4.9,
    reviewCount: 650,
    businessType: "Restaurant",
    info: businessInfo,
  },
  {
    id: "1",
    name: "Anker Fashion store",
    verified: true,
    image: "https://source.unsplash.com/random/?fashion,store",
    rating: 4.7,
    reviewCount: 1050,
    businessType: "Fashion",
    info: businessInfo,
  },
  {
    id: "2",
    name: "OG and So Mechanic",
    verified: true,
    image: "https://source.unsplash.com/random/?auto,mechanic",
    rating: 3.2,
    reviewCount: 380,
    businessType: "Auto",
    info: businessInfo,
  },
  {
    id: "3",
    name: "Anker Art and Fashion",
    verified: false,
    image: "https://source.unsplash.com/random/?art,fashion",
    rating: 1.4,
    reviewCount: 200,
    businessType: "Art",
    info: businessInfo,
  },
];

const reviews: IReview[] = [
  {
    id: "0",
    name: "Collins",
    time: "23h ago",
    rating: 5,
    review:
      "Thank you so much for choosing to dine with us and for taking the time to share your positive experience! We're delighted to hear that you and your family had a wonderful dinner at our restaurant.",
    profileImage: "https://source.unsplash.com/random/?man,bmw",
    images: [
      "https://source.unsplash.com/random/?man,burger",
      "https://source.unsplash.com/random/?man,pizza",
      "https://source.unsplash.com/random/?man,icecream",
    ],
    likes: 4,
    dislikes: 2,
    comments: 12,
  },
];

export { businesses, reviews };
