import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css',
    standalone: false
})
export class ProductListComponent {
  selectedProduct: Product;

  products = [
    {
      id: 1,
      name: '3 Pcs Mens Oversized Heavy Cotton Summer T-Shirts',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'NICE',
      gender: 'MEN',
      category: 'Summer',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue', 'Black'],
      price: 160,
      discountPrice: 140,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        '../../../assets/images/clothes/3 Pcs Mens Oversized Heavy Cotton Summer T-Shirts.webp',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 2,
      name: 'Amazon Essentials Mens Regular-Fit',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'ADIDAS',
      gender: 'MEN',
      category: 'Winter',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue', 'Black'],
      price: 130,
      is_in_inventory: false,
      items_left: 3,
      imageURL:
        '../../../assets/images/clothes/Amazon Essentials Mens Regular-Fit.webp',
      slug: 'nike-react-miler',
    },
    {
      id: 3,
      name: 'BETTE BOUTIK Womens Sleeveless',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'HOLO',
      gender: 'WOMEN',
      category: 'Summer',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue', 'Black', 'Brown', 'Red'],
      price: 120,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        '../../../assets/images/clothes/BETTE BOUTIK Womens Sleeveless.webp',
      slug: 'nike-air-zoom-pegasus-37',
    },
    {
      id: 4,
      name: 'Callaway Mens Short Sleeve',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'JOJO',
      gender: 'WOMEN',
      category: 'Spring',
      size: [6, 7, 8, 9, 10],
      color: ['White', , 'Brown', 'Red'],
      price: 180,
      discountPrice: 140,
      is_in_inventory: false,
      items_left: 3,
      imageURL:
        '../../../assets/images/clothes/Callaway Mens Short Sleeve.webp',
      slug: 'nike-joyride-run-flyknit',
    },
    {
      id: 5,
      name: 'Carhartt Unisex Kids Short Sleeve',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'BIBI',
      gender: 'WOMEN',
      category: 'FOOTBALL',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue', 'Black'],
      price: 250,
      is_in_inventory: false,
      items_left: 3,
      imageURL:
        '../../../assets/images/clothes/Carhartt Unisex Kids Short Sleeve.webp',
      slug: 'nike-mercurial-vapor-13-elite-fg',
    },
    {
      id: 6,
      name: 'Champion Mens Pants',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'PUMA',
      gender: 'WOMEN',
      category: 'Winter',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue', 'Black'],
      price: 150,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        '../../../assets/images/clothes/Champion Mens Pants.webp',
      slug: 'nike-phantom-vision-elite-dynamic-fit-fg',
    },
    {
      id: 7,
      name: 'Columbia Mens PFG Slack Tide Camp Shirt',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'SHIMI',
      gender: 'WOMEN',
      category: 'Sport',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Brown', 'Red', 'Black'],
      price: 80,
      discountPrice: 60,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        '../../../assets/images/clothes/Columbia Mens PFG Slack Tide Camp Shirt.webp',
      slug: 'nike-phantom-venom-academy-fg',
    },
    {
      id: 8,
      name: 'CUNLIN Grade 4 Wrinkle-Resistant',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'NINI',
      gender: 'MEN',
      category: 'Swim',
      size: [6, 7, 8, 9, 10, 11, 12],
      color: ['White', 'Blue', 'Black'],
      price: 145,
      discountPrice: 125,
      is_in_inventory: false,
      items_left: 3,
      imageURL:
        '../../../assets/images/clothes/CUNLIN Grade 4 Wrinkle-Resistant.webp',
      slug: 'nike-mercurial-vapor-13-elite-tech-craft-fg',
    },
    {
      id: 9,
      name: 'GAP Womens Long Sleeve Cozy Split Neck Top Shirt',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'AKKA',
      gender: 'MEN',
      category: 'Summer',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue', 'Black', 'Brown', 'Red'],
      price: 137,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        '../../../assets/images/clothes/GAP Womens Long Sleeve Cozy Split Neck Top Shirt.webp',
      slug: 'nike-mercurial-superfly-7-pro-mds-fg',
    },
    {
      id: 10,
      name: 'Gerber Baby Boys Multi-Pack Pants',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'JOJO',
      gender: 'KIDS',
      category: 'CASUAL',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue', 'Black'],
      price: 90,
      discountPrice: 70,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        '../../../assets/images/clothes/Gerber Baby Boys Multi-Pack Pants.webp',
      slug: 'nike-air-force-1',
    },
    {
      id: 11,
      name: 'GRACE KARIN Womens Gorgeous Pencil Dress',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'STIVE',
      gender: 'KIDS',
      category: 'CASUAL',
      size: [6, 7, 8, 9],
      color: ['White', 'Blue', 'Black'],
      price: 100,
      discountPrice: 75,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        '../../../assets/images/clothes/GRACE KARIN Womens Gorgeous Pencil Dress.webp',
      slug: 'nike-air-max-90',
    },
    {
      id: 12,
      name: 'Hanes Womens Ecosmart V-Notch',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'ALA',
      gender: 'KIDS',
      category: 'CASUAL',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue', 'Black', 'Red'],
      price: 110,
      is_in_inventory: false,
      items_left: 3,
      imageURL:
        '../../../assets/images/clothes/Hanes Womens Ecosmart V-Notch.webp',
      slug: 'nike-air-max-90-ltr',
    },
    {
      id: 13,
      name: 'Hanes Womens Originals Comfywear',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'BABY',
      gender: 'KIDS',
      category: 'Sport',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue', 'Black'],
      price: 110,
      is_in_inventory: false,
      items_left: 3,
      imageURL:
        '../../../assets/images/clothes/Hanes Womens Originals Comfywear.webp',
      slug: 'nike-joyride-dual-run',
    },
    {
      id: 14,
      name: 'HonestBaby unisex-baby 5-pack',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'AJJA',
      gender: 'KIDS',
      category: 'Game',
      size: [6, 7, 8, 9, 10, 11, 12],
      color: ['White', 'Blue', 'Black', 'Brown', 'Red'],
      price: 80,
      discountPrice: 65,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        '../../../assets/images/clothes/HonestBaby unisex-baby 5-pack.webp',
      slug: 'nike-renew-run',
    },
    {
      id: 16,
      name: 'Hurley Boys Soft Basic Cloud Slub T-Shirt',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'HAPPY',
      gender: 'MEN',
      category: 'Party',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Black'],
      price: 30,
      is_in_inventory: false,
      items_left: 4,
      imageURL:
        '../../../assets/images/clothes/Hurley Boys Soft Basic Cloud Slub T-Shirt.webp',
      slug: 'bridgport-advice',
    },
    {
      id: 15,
      name: 'IZOD Boys Performance Golf Grid',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'BOSS',
      gender: 'MEN',
      category: 'Official',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue', 'Black', 'Brown', 'Red'],
      price: 80,
      discountPrice: 45,
      is_in_inventory: true,
      items_left: 5,
      imageURL:
        '../../../assets/images/clothes/IZOD Boys Performance Golf Grid.webp',
      slug: 'beck',
    },
    {
      id: 17,
      name: 'Lucky Brand Mens Venice Burnout Notch Neck Tee',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'HOPO',
      gender: 'MEN',
      category: 'Spring',
      size: [6, 7, 8, 9, 10, 11, 12],
      color: ['White', 'Blue', 'Black'],
      price: 70,
      is_in_inventory: true,
      items_left: 6,
      imageURL:
        '../../../assets/images/clothes/Lucky Brand Mens Venice Burnout Notch Neck Tee.webp',
      slug: 'fester',
    },
    {
      id: 18,
      name: 'Nautica Mens Short Sleeve Solid',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'HEPCO',
      gender: 'MEN',
      category: 'FORMAL',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue', 'Black', 'Brown', 'Red'],
      price: 75,
      is_in_inventory: true,
      items_left: 7,
      imageURL:
        '../../../assets/images/clothes/Nautica Mens Short Sleeve Solid.webp',
      slug: 'pixel',
    },
    {
      id: 19,
      name: 'ROSELINLIN Womens Short Sleeve',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'JIMI',
      gender: 'MEN',
      category: 'Sport',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue'],
      price: 75,
      discountPrice: 60,
      is_in_inventory: false,
      items_left: 2,
      imageURL:
        '../../../assets/images/clothes/ROSELINLIN Womens Short Sleeve.webp',
      slug: 'austin',
    },
    {
      id: 20,
      name: 'Simple Joys by Carters Boys Knit Cargo Shorts',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'ARIZO',
      gender: 'WOMEN',
      category: 'FORMAL',
      size: [6, 7, 8, 9],
      color: ['White', 'Blue', 'Black'],
      price: 30,
      is_in_inventory: true,
      items_left: 6,
      imageURL:
        '../../../assets/images/clothes/Simple Joys by Carters Boys Knit Cargo Shorts.webp',
      slug: 'ss-hl-0135',
    },
    {
      id: 21,
      name: 'The Childrens Place Baby Boys Long Sleeve',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'MY WOMAN',
      gender: 'WOMEN',
      category: 'Sport',
      size: [6, 7, 8, 9, 10, 11, 12],
      color: ['White', 'Blue', 'Black'],
      price: 50,
      discountPrice: 35,
      is_in_inventory: true,
      items_left: 4,
      imageURL:
        '../../../assets/images/clothes/The Childrens Place Baby Boys Long Sleeve.webp',
      slug: 'ss-hl-0136',
    },
    {
      id: 22,
      name: 'The Childrens Place Baby',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'COBAL',
      gender: 'WOMEN',
      category: 'Winter',
      size: [6, 7, 8, 9, 10, 11, 12],
      color: ['White', 'Blue', 'Black', 'Brown', 'Red'],
      price: 35,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        '../../../assets/images/clothes/The Childrens Place Baby.webp',
      slug: 'ss-hl-0128',
    },
    {
      id: 23,
      name: 'The Childrens Place Boys Multipack',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'SHOOMA',
      gender: 'WOMEN',
      category: 'Winter',
      size: [6, 7, 8, 9, 10, 11],
      color: ['White', 'Blue', 'Black', 'Brown', 'Red'],
      price: 25,
      is_in_inventory: false,
      items_left: 7,
      imageURL:
        '../../../assets/images/clothes/The Childrens Place Boys Multipack.webp',
      slug: 'ss-ms-0075',
    },
    {
      id: 24,
      name: 'Under Armour Mens Sportstyle Left Chest',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'STIVE',
      gender: 'WOMEN',
      category: 'CASUAL',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue', 'Black'],
      price: 35,
      is_in_inventory: true,
      items_left: 4,
      imageURL:
        '../../../assets/images/clothes/Under Armour Mens Sportstyle Left Chest.webp',
      slug: 'ss-ms-0075',
    },
    {
      id: 25,
      name: 'Under Armour Mens Tech Graphic Shorts',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'HUNT',
      gender: 'WOMEN',
      category: 'Sport',
      size: [6, 7, 8, 9, 10],
      color: ['White', 'Blue'],
      price: 30,
      is_in_inventory: false,
      items_left: 3,
      imageURL:
        '../../../assets/images/clothes/Under Armour Mens Tech Graphic Shorts.webp',
      slug: 'ss-pm-0093',
    },
    {
      id: 26,
      name: 'VATPAVE Mens Casual Short Sleeve',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'ADIDAS',
      gender: 'KIDS',
      category: 'Sport',
      size: [6, 7, 8],
      color: ['White', 'Blue', 'Black', 'Red'],
      price: 55,
      is_in_inventory: false,
      items_left: 6,
      imageURL:
        '../../../assets/images/clothes/VATPAVE Mens Casual Short Sleeve.webp',
      slug: 'nizza-x-disney',
    },
    {
      id: 27,
      name: 'Womens Casual Lightweight',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'SHIMI',
      gender: 'KIDS',
      category: 'CASUAL',
      size: [6, 7, 8, 9],
      color: ['White', 'Blue', 'Black', 'Brown', 'Red'],
      price: 65,
      discountPrice: 45,
      is_in_inventory: true,
      items_left: 5,
      imageURL:
        '../../../assets/images/clothes/Womens Casual Lightweight.webp',
      slug: 'x_plr',
    },
  ];

  @Input()
  searchText: string = '';

  totalProductsCount = this.products.length;
  totalProductsInStock = this.products.filter((p) => p.is_in_inventory === true)
    .length;
  totalProductsNotInStock = this.products.filter(
    (p) => p.is_in_inventory === false
  ).length;

  selectedFilterRadioButton: string = 'all';

  onFilterChanged(value: string) {
    this.selectedFilterRadioButton = value;
  }
}
