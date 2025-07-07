
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "../styles/PharmacyProducts.scss";

const categories = [
  "Pain Relief & Anti-Inflammatories",
  "Antibiotics & Antimicrobials",
  "Cold, Flu & Allergy Medications",
  "Digestive Health & Antacids",
  "Chronic Disease Medications",
  "Vitamins & Supplements",
  "Women’s Health & Reproductive Health",
  "Skin Care & Dermatology",
  "Dental Care Products",
  "First Aid & Wound Care",
  "Pediatric Care"
];

const products = [
  // Pain Relief & Anti-Inflammatories
  {
    name: "Paracetamol 500mg",
    image: "https://media.istockphoto.com/id/1022216070/photo/packet-of-generic-paracetamol-tablets.webp?a=1&b=1&s=612x612&w=0&k=20&c=UFjLzB41Y_dst-ZRd_xnwMYS4EKaVP3dd-bcZUmOO-s=",
    price: "Ksh 150",
    desc: "Effective for mild to moderate pain and fever.",
    category: "Pain Relief & Anti-Inflammatories"
  },
  {
    name: "Ibuprofen 200mg",
    image: "https://media.istockphoto.com/id/1022216270/photo/packet-of-generic-ibuprofen-tablets.webp?a=1&b=1&s=612x612&w=0&k=20&c=SZvp73mRykCSQ9XMskJZ2rEWrjqh7nM57ha9LRrXwtk=",
    price: "Ksh 300",
    desc: "Used for pain, inflammation, and fever.",
    category: "Pain Relief & Anti-Inflammatories"
  },
  {
    name: "Diclofenac 50mg",
    image: "https://media.istockphoto.com/id/1166523624/photo/packing-with-pills-isolated.webp?a=1&b=1&s=612x612&w=0&k=20&c=S0E2CcNAZCj8i6b5GdfGpThQXYiZXsXqjCpfS07-BZI=",
    price: "Ksh 250",
    desc: "Used for pain, inflammation, and fever.",
    category: "Pain Relief & Anti-Inflammatories"
  },
  {
    name: "Aspirin 100mg",
    image: "https://media.istockphoto.com/id/1340436771/photo/aspirin-medicine-bottle-with-white-round-pills-on-flat-surface.jpg?s=2048x2048&w=is&k=20&c=yvgFiilIoVhfq3loDtp8qCcv_TkzmAIlL9YyLlyoK5M=",
    price: "Ksh 150",
    desc: "Used for pain, inflammation, and fever.",
    category: "Pain Relief & Anti-Inflammatories"
  },
  {
    name: "Naproxen 250mg",
    image: "https://media.istockphoto.com/id/1263113221/photo/naproxen-tablets-or-pills.webp?a=1&b=1&s=612x612&w=0&k=20&c=n8WmVurolo4IhUk7FSqez9v-iNBwKePq5ctYsz_fDtI=",
    price: "Ksh 200",
    desc: "Used for pain, inflammation, and fever.",
    category: "Pain Relief & Anti-Inflammatories" 
  },


  // Antibiotics & Antimicrobials
  {
    name: "Amoxicillin 500mg",
    image: "https://media.istockphoto.com/id/2096790710/photo/generic-box-and-amoxicillin-antibiotic-pills-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=ejtx1o7tcwKTt-65BN-t4EtbVILxHAhRI5gmqzzRPOg=",
    price: "Ksh 150",
    desc: "Broad-spectrum antibiotic for bacterial infections.",
    extra: "Prescription Required",
    category: "Antibiotics & Antimicrobials"
  },
  {
    name: "Metronidazole 400mg",
    image: "https://media.istockphoto.com/id/469816267/photo/drugs-on-a-white-background.jpg?s=612x612&w=0&k=20&c=cDxOl_uxr_LqAZMUyvydi49VDlRy4R7b_qZoCiGb0HM=",
    price: "Ksh 200",
    desc: "Used to treat infections caused by bacteria and parasites.",
    category: "Antibiotics & Antimicrobials"
  },
  {
    name: "Ciprofloxacin 500mg",
    image: "https://media.istockphoto.com/id/1164018543/photo/generic-tablets-of-ciprofloxacin-antibiotics.webp?a=1&b=1&s=612x612&w=0&k=20&c=1P5Y7K_oFTfeghXwKB2zZVMgmZqZLxHpbAT__bU_wOg=",
    price: "Ksh 450",
    desc: "Broad-spectrum antibiotic for bacterial infections.",
    extra: "Prescription Required",
    category: "Antibiotics & Antimicrobials"
  },
  {
    name: "Azithromycin 250mg",
    image: "https://images.unsplash.com/photo-1616526629549-353331fea648?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QXppdGhyb215Y2luJTIwMjUwbWd8ZW58MHx8MHx8fDA%3D",
    price: "Ksh 500",
    desc: "Used to treat various bacterial infections.",
    extra: "Prescription Required",
    category: "Antibiotics & Antimicrobials"

  },
  {
    name: "Clindamycin 300mg",
    image: "https://media.istockphoto.com/id/1216295137/photo/medical-concept-hydroxychloroquine-cloroquina-medicine-with-pills-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=ECojhxS4cwNog0qicmOoNKJxbBo8vhMbRM0aMRoHX3s=",
    price: "Ksh 550",
    desc: "Used to treat serious infections caused by bacteria.",
    extra: "Prescription Required",
    category: "Antibiotics & Antimicrobials"  
  },
  {
    name: "Doxycycline 100mg",
    image: "https://media.istockphoto.com/id/2193587732/photo/generic-doxycycline-antibiotic-pills.webp?a=1&b=1&s=612x612&w=0&k=20&c=mkpzhleYYz63nBdxdHVwRn6b6umDIwuBeZIizdWQKMk=",
    price: "Ksh 480",
    desc: "Used to treat a variety of bacterial infections.",
    extra: "Prescription Required",
    category: "Antibiotics & Antimicrobials"
    
  },
  {
    name: "Gentamicin 80mg",
    image: "https://media.istockphoto.com/id/1164018543/photo/generic-tablets-of-ciprofloxacin-antibiotics.webp?a=1&b=1&s=612x612&w=0&k=20&c=1P5Y7K_oFTfeghXwKB2zZVMgmZqZLxHpbAT__bU_wOg=",
    price: "Ksh 600",
    desc: "Used to treat bacterial infections.",
    extra: "Prescription Required",
    category: "Antibiotics & Antimicrobials"
  },
  {
    name: "Ceftriaxone 250mg",
    image: "https://media.istockphoto.com/id/93342231/photo/pills-iii.jpg?s=612x612&w=0&k=20&c=9-ZFMmvgsjGfITYlbEvB_zHT7FhValVoAQle3EldIF0=",
    price: "Ksh 200",
    desc: "Used to treat serious bacterial infections.",
    extra: "Prescription Required",
    category: "Antibiotics & Antimicrobials"
  },


  // Cold, Flu & Allergy Medications
  {
    name: "Cough Syrup",
    image: "https://media.istockphoto.com/id/2163784413/photo/close-up-of-bottle-pouring-cough-syrup-in-container-on-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=TbppVrLLl9bQev3PGPsqswQgVIzEeEBsvSbltvSBp1I=",
    price: "Ksh 150",
    desc: "Soothes cough and relieves throat irritation.",
    category: "Cold, Flu & Allergy Medications"
  },
  {
    name: "Cetirizine 10mg",
    image: "https://media.istockphoto.com/id/1096069432/photo/lots-of-blisters-of-white-round-pills-pack-of-pills-on-white-background.jpg?s=612x612&w=0&k=20&c=w7gxUt3SjfyB07WvwtUdNTiRtOK2H7U0Sy4EcQ2D3EM=",
    price: "Ksh 80",
    desc: "Relieves sneezing, runny nose, and allergies.",
    category: "Cold, Flu & Allergy Medications"
  },
  {
    name: "Cetirizine (Zyrtec)",
    image: "https://optumhealthpharmacy.com/cdn/shop/files/2663-Zyrtec-Oral-Solution-1mg_ml.webp?v=1711391322",
    price: "Ksh 150",
    desc: "Relieves sneezing, runny nose, and allergies.",
    category: "Cold, Flu & Allergy Medications" 
  },
  {
    name:"Loratadine (Clarityne)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrOC7m-pVsvZG0NKhh0hyzq_PEGr8nO7-zrg&s",
    price: "Ksh 100",
    desc: "Non-drowsy antihistamine for allergy relief.",
    category: "Cold, Flu & Allergy Medications"
  },
  {
    name: "Pseudoephedrine (Sudafed)",
    image: "https://images.ctfassets.net/vw8ndq76bzft/7eXEmgTJXdXmcIsuIOyxsp/7238a747705791d2475c473fd7bbf089/SUD_300810865241_Sudafed_Sinus_Congestion_24_ct_24ct_00000_Original-file.webp",
    price: "Ksh 250",
    desc: "Decongestant for nasal and sinus relief.",
    category: "Cold, Flu & Allergy Medications"
  },
  {
    name: "FluGone / ColdCaps",
    image: "https://www.goodlife.co.ke/wp-content/smush-webp/2021/09/flugone-10s.jpg.webp",
    price: "Ksh 180",
    desc: "Combination of pain reliever, decongestant, and antihistamine.",
    category: "Cold, Flu & Allergy Medications"
  
  },
{
    name: "Saline Nasal Spray",
    image: "https://media.istockphoto.com/id/1385157465/photo/a-woman-with-rhinitis-squeaks-a-saline-solution-or-vasoconstrictor-drops-into-the-nose-lying.jpg?s=612x612&w=0&k=20&c=pBH8HBuYKC8_mK4nmicTxjF3t601ArQSDNs1YjxX4xQ=",
    price: "Ksh 150",
    desc: "Moisturizes nasal passages and relieves congestion.",
    category: "Cold, Flu & Allergy Medications"

},
{
    name: "Throat Lozenges",
    image: "https://media.istockphoto.com/id/2167029404/photo/medical-lozenges-tablets-orange-flavor-on-a-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=rtO4Gx7N8HiwByIjJI6r8uNJQ1s2oga0peTkuN04Ul0=",
    price: "Ksh 120",
    desc: "Soothes sore throat and reduces irritation.",
    category: "Cold, Flu & Allergy Medications"
},



  // Digestive Health & Antacids
  {
    name: "Antacid Tablets",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500&auto=format&fit=crop&q=60",
    price: "Ksh 120",
    desc: "Relieves heartburn and indigestion.",
    category: "Digestive Health & Antacids"
  },
  {
    name: "ORS Sachets (Oral Rehydration Salts)",
    image: "https://pharaoniapharma.com/eneg/wp-content/uploads/2017/07/ors-3d.jpg",
    price: "Ksh 100",
    desc: "Prevents dehydration from diarrhea.",
    category: "Digestive Health & Antacids"
  },
  {
    name: "Gaviscon",
    image: "https://cdn.mafrservices.com/sys-master-root/heb/h9e/51543111827486/210409_main.jpg",
    price: "Ksh 250",
    desc: "Relieves heartburn and indigestion.",
    category: "Digestive Health & Antacids"
  },
  {
    name: "Zantac",
    image: "https://assets.medpagetoday.net/media/images/106xxx/106396.jpg?width=400&height=400",
    price: "Ksh 300",
    desc: "Reduces stomach acid and relieves heartburn.",
    category: "Digestive Health & Antacids"
  },
  {
    name: "Loperamide (Imodium)",
    image: "https://media.istockphoto.com/id/1164018543/photo/generic-tablets-of-ciprofloxacin-antibiotics.webp?a=1&b=1&s=612x612&w=0&k=20&c=1P5Y7K_oFTfeghXwKB2zZVMgmZqZLxHpbAT__bU_wOg=",
    price: "Ksh 150",
    desc: "Reduces stomach acid and relieves heartburn.",
    category: "Digestive Health & Antacids"

  },
  {
    name: "Metoclopramide (Maxolon)",
    image: "https://thecarepharmacy.com/wp-content/uploads/2023/08/60.webp",
    price: "Ksh 200",

    desc: "Reduces stomach acid and relieves heartburn.",
    category: "Digestive Health & Antacids"
  },
  {
    name: "Ranitidine (Zantac)",
    image: "https://www.drugs.com/images/pills/fio/BOI01212.JPG",
    price: "Ksh 300",
    desc: "Reduces stomach acid and relieves heartburn.",
    category: "Digestive Health & Antacids"
  },
  {
    name: "Omeprazole (Losec)",
    image: "https://media.istockphoto.com/id/1297469143/photo/packet-of-generic-omeprazole-pills.jpg?s=612x612&w=0&k=20&c=xflLnFqVeXmwu8RhTNR0OtN4BrC_xo7yHe54cjNkpnU=",
    price: "Ksh 200",
    desc: "Reduces stomach acid and relieves heartburn.",
    category: "Digestive Health & Antacids"
  
  },
  {
    name: "Domperidone (Motilium)",
    image: "https://www.ethicaldrugs.net/wp-content/uploads/2023/12/2-12.jpg",
    price: "Ksh 250",
    desc: "Reduces stomach acid and relieves heartburn.",
    category: "Digestive Health & Antacids"
    
  },
  {
    name: "Simethicone (Gas-X)",
    image: "https://photos-us.bazaarvoice.com/photo/2/cGhvdG86Z2FzeA/5c3f398c-7b7f-5fef-b1e6-632794c7e531",
    price: "Ksh 100",
    desc: "Reduces stomach acid and relieves heartburn.",
    category: "Digestive Health & Antacids"

  },
  {
    name: "Famotidine (Pepcid)",
    image: "https://media.istockphoto.com/id/2196462938/photo/famotidine-text-title-drugs-tablets-medications-for-intestinal-diseases.jpg?s=2048x2048&w=is&k=20&c=hIPTqToieEv0dxIc7t0Iur2aaF9DqnCfLHmJe9uT0xM=",
    price: "Ksh 150", 
    desc: "Reduces stomach acid and relieves heartburn.",
    category: "Digestive Health & Antacids"
    
  },


  // Chronic Disease Medications
  {
    name: "Losartan 50mg",
    image: "https://media.istockphoto.com/id/2211182288/photo/yellow-pills-spilling-out-of-medicine-bottle.jpg?s=612x612&w=0&k=20&c=3IUMI68DHE5BDnNvMpTQPX7tfsKHCgksSRMB9OfXR5k=",
    price: "Ksh 600",
    desc: "For managing high blood pressure.",
    category: "Chronic Disease Medications"
  },
  {
    name: "Metformin 500mg",
    image: "https://media.istockphoto.com/id/1226187605/photo/white-and-brown-glass-medicine-bottles-with-colorful-tablets-pills-capsules-drugs-using-for.jpg?s=2048x2048&w=is&k=20&c=9pCeDxrx8b5iXgCN80bAtwhw6T7I65iqdcldSVJOQ5M=",
    price: "Ksh 320",
    desc: "For controlling blood sugar in diabetes.",
    category: "Chronic Disease Medications"
  },
  {
    name: "Atorvastatin 20mg",
    image: "https://media.istockphoto.com/id/2187676882/photo/atorvastatin-film-coated-tablets-20mg-and-omeprazole-capsules-blue-and-white-grouped-on-white.jpg?s=612x612&w=0&k=20&c=0cGCzMj8WXzfW4Unk7OKXG99emYvQKwlsXJjmhTMqxg=",
    price: "Ksh 500",
    desc: "For lowering cholesterol levels.",
    category: "Chronic Disease Medications"
  },
  {
    name: "Amlodipine 5mg",
    image: "https://media.istockphoto.com/id/1498446437/photo/medicine-capsule-on-white-background-scattered-capsules-medicine.jpg?s=612x612&w=0&k=20&c=xiY3aHD3xP2Owq09kJESO2RZE4Fy8CUzWhxqbx_bVmQ=",
    price: "Ksh 400",
    desc: "For managing high blood pressure.",
    category: "Chronic Disease Medications"
  },
  {
    name: "Levothyroxine 50mcg",
    image: "https://images.unsplash.com/photo-1522426197515-ad17e39de88d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fExldm90aHlyb3hpbmUlMjA1MG1jZ3xlbnwwfHwwfHx8MA%3D%3D",
    price: "Ksh 550",
    desc: "For managing hypothyroidism.",
    category: "Chronic Disease Medications"
  },
  
  {
    name: "Simvastatin 20mg",
    image: "https://media.istockphoto.com/id/527630951/photo/capsules-in-blister-pack.webp?a=1&b=1&s=612x612&w=0&k=20&c=3qQfkDgJHt3gEKqCjbLxZqCFmupOZQ27--vx9J1pZsY=",
    price: "Ksh 450",
    desc: "For lowering cholesterol levels.",
    category: "Chronic Disease Medications"
  },
  {
    name: "Warfarin 5mg",
    image: "https://media.istockphoto.com/id/466002555/photo/pills.webp?a=1&b=1&s=612x612&w=0&k=20&c=zVR4-OkIcAJjp0HHTOPI6-S0ItuBVrYCplfZ2crwb24=",
    price: "Ksh 700",
    desc: "For preventing blood clots.",
    category: "Chronic Disease Medications"
  },
  {
    name: "Insulin (various types)",
    image: "https://media.istockphoto.com/id/2150938026/photo/human-crowd-surrounding-an-injectable-insulin-bottle-on-purple-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=fBhFMTFHbr_i3zyKMJ6B2FSzOqAbFXLRfX0jbf7pEDc=",
    price: "Ksh 1200",
    desc: "For managing diabetes.",
    category: "Chronic Disease Medications"
  },
  {
    name: "Metformin 500mg",
    image: "https://media.istockphoto.com/id/1257705537/photo/tablets-and-capsules-pills-on-white-background.jpg?s=2048x2048&w=is&k=20&c=MnOaI1GOiGAnPjnWXS26DyouC1iFgsz787FFIROgQbg=",
    price: "Ksh 320",
    desc: "For controlling blood sugar in diabetes.",
    category: "Chronic Disease Medications"
  },
  {
    name: "Lisinopril 10mg",
    image: "https://media.istockphoto.com/id/473185396/photo/antibiotic-pills.webp?a=1&b=1&s=612x612&w=0&k=20&c=eN1LjNSur_AWt7-QdtETFScxPSG2hq2FEEeYXEoq0Us=",
    price: "Ksh 400",
    desc: "For managing high blood pressure.",
    category: "Chronic Disease Medications"
  },
  {
    name: "Amlodipine 5mg",
    image: "https://media.istockphoto.com/id/139704127/photo/tablet-pack-isolated-on-white-with-clipping-path.jpg?s=1024x1024&w=is&k=20&c=9fDzYt-KN9dYJHnOzT9Vf4w3d9M0oR4A35MiHB9I6DQ=",
    price: "Ksh 400",
    desc: "For managing high blood pressure.",
    category: "Chronic Disease Medications"
  },
  {
    name: "Levothyroxine 50mcg",
    image: "https://media.istockphoto.com/id/938105566/photo/hormone-replacement-therapy-of-thyroid-or-hypothyroidism-concept-photo-model-of-thyroid-gland.webp?a=1&b=1&s=612x612&w=0&k=20&c=Qk82YcgF7eKPZoFPx1PWyROQpKp6eRBM6brXrrLcZok=",
    price: "Ksh 550",
    desc: "For managing hypothyroidism.",
    category: "Chronic Disease Medications"
  },

  // Vitamins & Supplements
  {
    name: "Vitamin C 1000mg",
    image: "https://media.istockphoto.com/id/1214689364/photo/vitamin-c-medicine-bottle-high-antioxidant-protect-covid-19-flu-contagious-disease-health.webp?a=1&b=1&s=612x612&w=0&k=20&c=J23_0bSsNiwFneeYiL70kKbFhB5fy-pT34h8r-oq3lk=",
    price: "Ksh 180",
    desc: "Boosts immunity and fights infections.",
    category: "Vitamins & Supplements"
  },
  {
    name: "Zinc Tablets",
    image: "https://media.istockphoto.com/id/2194430603/photo/pills-with-zinc-zn-element-dietary-supplements-vitamin-capsules.webp?a=1&b=1&s=612x612&w=0&k=20&c=kc8WuG7Kb7Q4erwQlOOiNvnqfw5MlBuITfLKYR0N7ns=",
    price: "Ksh 150",
    desc: "Supports immune function and wound healing.",
    category: "Vitamins & Supplements"
  },
  {
    name: "Multivitamin Tablets",
    image: "https://images.unsplash.com/photo-1640958898466-b4dd00872fc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TXVsdGl2aXRhbWluJTIwVGFibGV0c3xlbnwwfHwwfHx8MA%3D%3D",
    price: "Ksh 250",
    desc: "Comprehensive vitamin and mineral supplement.",
    category: "Vitamins & Supplements"
  },
  {
    name: "Omega-3 Fish Oil Capsules",
    image: "https://images.unsplash.com/photo-1743535681049-512db5983e73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8T21lZ2ElMjAzJTIwRmlzaCUyME9pbCUyMENhcHN1bGVzfGVufDB8fDB8fHww",
    price: "Ksh 400",
    desc: "Supports heart and brain health.",
    category: "Vitamins & Supplements"
  },
  {
    name: "Calcium Tablets",
    image: "https://media.istockphoto.com/id/471234033/photo/calcium-tablets-cheese-milk.webp?a=1&b=1&s=612x612&w=0&k=20&c=Hbxa8igAhx07JsN6TCOnxDyz3ZMYnv142TDjWQxJUsg=",
    price: "Ksh 200",
    desc: "Supports bone health and prevents osteoporosis.",
    category: "Vitamins & Supplements"
  },
  {
    name: "Vitamin D3 1000 IU",
    image: "https://images.unsplash.com/photo-1648139347040-857f024f8da4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Vml0YW1pbiUyMEQzJTIwMTAwMCUyMElVfGVufDB8fDB8fHww",
    price: "Ksh 250",
    desc: "Supports bone health and immune function.",
    category: "Vitamins & Supplements"
  },
{
  name: "Probiotics",
  image: "https://plus.unsplash.com/premium_photo-1672759455155-d0476239d6e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UHJvYmlvdGljc3xlbnwwfHwwfHx8MA%3D%3D",
  price: "Ksh 300",
  desc: "Supports digestive health and gut flora balance.",
  category: "Vitamins & Supplements"
},
{
  name: "Iron Tablets",
  image: "https://images.unsplash.com/photo-1704650311329-fb978a50e5e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fElyb24lMjBUYWJsZXRzfGVufDB8fDB8fHww",  
  price: "Ksh 200", 
  desc: "Supports iron absorption and metabolism.",
  category: "Vitamins & Supplements"
},
{
  name: "Vitamin B Complex",
  image: "https://media.istockphoto.com/id/2148586243/photo/vitamin-b-pills-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ck9fG7ZYQ5ToLPdWcFr4lmJhl1OtBeM-e_wARrr9gWY=",
  price: "Ksh 220",
  desc: "Supports energy metabolism and nervous system health.",
  category: "Vitamins & Supplements"
},
{
  name: "Magnesium Tablets",
  image: "https://media.istockphoto.com/id/1297448634/photo/woman-taking-magnesium-pills-out-of-a-bottle.webp?a=1&b=1&s=612x612&w=0&k=20&c=YusinPGFZlYiYVsZEX7xY1Rd6Lr2W0YpWZ0ti5KUp0c=",
  price: "Ksh 180",
  desc: "Supports muscle and nerve function.",
  category: "Vitamins & Supplements"
},
{
  name: "Zinc Lozenges",
  image: "https://www.goodlife.co.ke/wp-content/smush-webp/2021/09/1131354.jpg.webp",
  price: "Ksh 150",
  desc: "Supports immune function and throat health.",
  category: "Vitamins & Supplements"
},
{
  name: "Coenzyme Q10 (CoQ10)",
  image: "https://www.goodlife.co.ke/wp-content/smush-webp/2023/11/1135709.jpeg.webp",
  price: "Ksh 400",
  desc: "Supports heart health and energy production.",
  category: "Vitamins & Supplements"
},

  // Women’s Health & Reproductive Health
  {
    name: "Folic Acid Tablets",
    image: "https://media.istockphoto.com/id/1197693392/photo/pregnant-woman-taking-pill-at-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=5IIjrj-UKQfTEWHFyMt_NHZuSYhamG2DVLuyNiksAcY=",
    price: "Ksh 220",
    desc: "Supports reproductive health and pregnancy.",
    category: "Women’s Health & Reproductive Health"
  },
  
  {
    name: "Prenatal Vitamins",
    image: "https://images.unsplash.com/photo-1734607402858-a10164ded7a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UHJlbmF0YWwlMjBWaXRhbWluc3xlbnwwfHwwfHx8MA%3D%3D",
    price: "Ksh 300",
    desc: "Supports fetal development and maternal health.",
    category: "Women’s Health & Reproductive Health"
  },
  {
    name: "Menstrual Relief",
    image: "https://plus.unsplash.com/premium_photo-1702599088583-d6d0649d1a66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TWVuc3RydWFsJTIwUmVsaWVmfGVufDB8fDB8fHww",
    price: "Ksh 180",
    desc: "Relieves menstrual cramps and discomfort.",
    category: "Women’s Health & Reproductive Health"

  },
  {
    name: "Hormonal Contraceptive Pills",
    image: "https://images.unsplash.com/photo-1645566373351-b69d3371d410?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEhvcm1vbmFsJTIwQ29udHJhY2VwdGl2ZSUyMFBpbGxzfGVufDB8fDB8fHww",
    price: "Ksh 500",
    desc: "Prevents pregnancy and regulates menstrual cycles.", 
    category: "Women’s Health & Reproductive Health"
  },
  {
    name: "Calcium and Vitamin D Supplements",
    image: "https://images.unsplash.com/photo-1664956617097-a99150bc32bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fENhbGNpdW0lMjBhbmQlMjBWaXRhbWluJTIwRCUyMFN1cHBsZW1lbnRzfGVufDB8fDB8fHww",
    price: "Ksh 250",
    desc: "Supports bone health and prevents osteoporosis.",
    category: "Women’s Health & Reproductive Health"

  },
  {
    name: "Menopause Relief Supplements",
    image: "https://images.unsplash.com/photo-1631980839613-61a08159d506?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWVub3BhdXNlJTIwUmVsaWVmJTIwU3VwcGxlbWVudHN8ZW58MHx8MHx8fDA%3D",
    price: "Ksh 300",
    desc: "Helps manage symptoms of menopause.",
    category: "Women’s Health & Reproductive Health"
  },
  {
    name: "Pregnancy Test Kits",  
    image: "https://plus.unsplash.com/premium_photo-1673631267269-f1899119334d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UHJlZ25hbmN5JTIwVGVzdCUyMEtpdHN8ZW58MHx8MHx8fDA%3D",
    price: "Ksh 200",
    desc: "Detects pregnancy hormones in urine.",
    category: "Women’s Health & Reproductive Health"
  },
  {
    name: "Folic Acid Supplements",
    image: "https://media.istockphoto.com/id/1443539399/photo/pregnant-woman-taking-a-medicine-or-nutritional-supplement.webp?a=1&b=1&s=612x612&w=0&k=20&c=mSHcuG90b7-U2GYJYncLjmV2V98u5LAxkRyfJMIWIsA=",
    price: "Ksh 150",
    desc: "Supports fetal development and prevents neural tube defects.",
    category: "Women’s Health & Reproductive Health"
  },
  {
    name: "Breast Cancer Screening Kits",
    image: "https://images.unsplash.com/photo-1598884143267-586d90a32141?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QnJlYXN0JTIwQ2FuY2VyJTIwU2NyZWVuaW5nJTIwS2l0c3xlbnwwfHwwfHx8MA%3D%3D",
    price: "Ksh 800",
    desc: "At-home screening for breast cancer awareness.",
    category: "Women’s Health & Reproductive Health"
  },
  {
    name: "Menstrual Cups",
    image: "https://media.istockphoto.com/id/2193884007/photo/young-woman-holding-menstrual-cups-in-the-shape-of-a-heart-on-a-red-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=AOGwP6hhvRVtSp3yZPY2c_KezgthGl2r4MQD2kkCsZo=",
    price: "Ksh 350",
    desc: "Reusable menstrual hygiene product.",
    category: "Women’s Health & Reproductive Health"
  },
  {
    name: "Pregnancy Support Belts",
    image: "https://tashbabystore.co.ke/wp-content/uploads/2023/09/194_image_high_2048x2048.webp",
    price: "Ksh 600",
    desc: "Provides support during pregnancy.",
    category: "Women’s Health & Reproductive Health"

  },
  {
    name: "Ovulation Test Kits",
    image: "https://natalist.com/cdn/shop/products/ovulation_test_kit_1000x_crop_center.jpg?v=1655478785",
    price: "Ksh 250",
    desc: "Helps track ovulation cycles for family planning.",
    category: "Women’s Health & Reproductive Health"
  },

  // Skin Care & Dermatology
  {
    name: "Aloe Vera Gel",
    image: "https://media.istockphoto.com/id/1338025187/photo/aloe-vera-gel-dripping-on-group-of-aloe-vera-slices.webp?a=1&b=1&s=612x612&w=0&k=20&c=FrtXWYQ49fyOnu3dvbrEuRYt6gE_Cplh43H6cmgEuHg=",
    price: "Ksh 300",
    desc: "Soothes and moisturizes the skin.",
    category: "Skin Care & Dermatology"
  },
  {
    name: "Antifungal Cream",
    image: "https://media.istockphoto.com/id/2185737980/photo/antifungal-cream-and-nail-fungal.webp?a=1&b=1&s=612x612&w=0&k=20&c=DeT5ffhy5NBt8M_XTDALggXsCMNz7JkEyiHCPnWfSGM=",
    price: "Ksh 180",
    desc: "Treats fungal infections of the skin.",
    category: "Skin Care & Dermatology"
  },
{
  name: "Acne Treatment Cream",
  image: "https://media.istockphoto.com/id/1201568138/photo/portrait-of-woman-with-acne-inflammation-on-her-face-and-she-trying-to-applying-acne-cream-on.webp?a=1&b=1&s=612x612&w=0&k=20&c=wR3970pObn1rN-tSezLZkwioI9M6MAwbR3LCUfr3Y24=",
  price: "Ksh 250",
  desc: "Reduces acne and prevents future breakouts.",
  category: "Skin Care & Dermatology"
},
{
  name: "Moisturizing Cream",
  image: "https://images.unsplash.com/photo-1575410229391-19b4da01cc94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TW9pc3R1cml6aW5nJTIwQ3JlYW18ZW58MHx8MHx8fDA%3D",
  price: "Ksh 200",
  desc: "Hydrates and nourishes the skin.",
  category: "Skin Care & Dermatology"
},
{
  name: "Sunscreen SPF 50",
  image: "https://images.unsplash.com/photo-1698912269897-c9325da81afc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U3Vuc2NyZWVuJTIwU1BGJTIwNTB8ZW58MHx8MHx8fDA%3D",
  price: "Ksh 150",
  desc: "Protects the skin from UV rays.",
  category: "Skin Care & Dermatology"
},
{
  name: "Eczema Cream",
  image: "https://images.unsplash.com/photo-1614267862869-67875a45cd2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEVjemVtYSUyMENyZWFtfGVufDB8fDB8fHww",
  price: "Ksh 250",
  desc: "Relieves eczema symptoms and soothes the skin.",
  category: "Skin Care & Dermatology"

},
{
  name: "Anti-Aging Cream",
  image: "https://images.unsplash.com/photo-1708477199100-e4d5f56a8eb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QW50aSUyMEFnaW5nJTIwQ3JlYW18ZW58MHx8MHx8fDA%3D",
  price: "Ksh 350",
  desc: "Reduces fine lines and wrinkles.",
  category: "Skin Care & Dermatology"

},
{
  name: "Hydrating Face Mask",
  image: "https://plus.unsplash.com/premium_photo-1732576711163-ea2ca7de8811?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SHlkcmF0aW5nJTIwRmFjZSUyME1hc2t8ZW58MHx8MHx8fDA%3D",
  price: "Ksh 150",
  desc: "Deeply hydrates and revitalizes the skin.",
  category: "Skin Care & Dermatology"

},
{
  name: "Psoriasis Treatment Cream",
  image: "https://media.istockphoto.com/id/1442908647/photo/applying-moisturizer-to-skin-with-psoriasis.webp?a=1&b=1&s=612x612&w=0&k=20&c=UInxFYfc_HW96xdrRJLDkEPzbQJVDGUknv51O4F6uqA=",
  price: "Ksh 250",
  desc: "Relieves psoriasis symptoms and soothes the skin.",
  category: "Skin Care & Dermatology"
},
{
  name: "Wart Removal Cream",
  image: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/65/9502091/1.jpg?166898",
  price: "Ksh 200",
  desc: "Removes warts and prevents future infections.",
  category: "Skin Care & Dermatology"
},
{
  name: "Skin Brightening Cream",
  image: "https://images.unsplash.com/photo-1674867688570-1ec1ff21f597?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFNraW4lMjBCcmlnaHRlbmluZyUyMENyZWFtfGVufDB8fDB8fHww",
  price: "Ksh 300",
  desc: "Evens skin tone and reduces dark spots.",
  category: "Skin Care & Dermatology"

},
{
  name: "Anti-Itch Cream",
  image: "https://images.unsplash.com/photo-1643379855997-5344bd8d3e78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEFudGklMjBJdGNoJTIwQ3JlYW18ZW58MHx8MHx8fDA%3D",
  price: "Ksh 250",
  desc: "Relieves itching and soothes the skin.",
  category: "Skin Care & Dermatology"

},
  // Dental Care Products
  {
    name: "Fluoride Toothpaste",
    image: "https://images.unsplash.com/photo-1706520636717-5820f9b9d03e?w=500&auto=format&fit=crop&q=60",
    price: "Ksh 150",
    desc: "Strengthens enamel and prevents cavities.",
    category: "Dental Care Products"
  },
  {
    name: "Dental Floss",
    image: "https://media.istockphoto.com/id/2192358916/photo/anonymous-close-up-image-of-a-person-flossing-their-teeth-emphasizing-the-importance-of.webp?a=1&b=1&s=612x612&w=0&k=20&c=d8iRb0X798coYDKbvjYnzeW8b5_pouKUATzje8VGHic=",
    price: "Ksh 120",
    desc: "Removes plaque between teeth.",
    category: "Dental Care Products"
  },
  {
    name: "Mouthwash",
    image: "https://images.unsplash.com/photo-1622115914441-fe73c383673d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TW91dGh3YXNofGVufDB8fDB8fHww",
    price: "Ksh 500",
    desc: "Freshens breath and kills bacteria.",
    category: "Dental Care Products"
  },
  {
    name: "Toothbrush",
    image: "https://media.istockphoto.com/id/2167362374/photo/close-up-of-toothbrushes-in-pink-cups-on-table-against-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=6G7IV1SqmQRhQbryXE16fRNciqvXaJrwqxvG3ltQyXo=",
    price: "Ksh 100",
    desc: "Keeps teeth clean and healthy.",
    category: "Dental Care Products"
  },
  {
    name: "Dental Whitening Strips",
    image: "https://media.istockphoto.com/id/1645852546/photo/clear-aligner-dental-night-guard.webp?a=1&b=1&s=612x612&w=0&k=20&c=EW3w1F5gFhnt1zSWRcmam58LjdfJW7sblVMgr1xdoC4=",
    price: "Ksh 200",
    desc: "Whiten teeth and remove stains.",
    category: "Dental Care Products"
  },
  {
    name: "Tongue Scraper",
    image: "https://media.istockphoto.com/id/503888524/photo/woman-cleaning-her-tongue.webp?a=1&b=1&s=612x612&w=0&k=20&c=n45lP-E5hhgnXKAsv7OjOYoU1O_NFaDL3jXxka9Tc8U=",
    price: "Ksh 80",
    desc: "Keeps tongue clean and healthy.",
    category: "Dental Care Products"

  },
  {
    name: "Dental Chewing Gum",
    image: "https://images.unsplash.com/photo-1518201503748-a69be957380e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fERlbnRhbCUyMENoZXdpbmclMjBHdW18ZW58MHx8MHx8fDA%3D",
    price: "Ksh 50",
    desc: "Freshens breath and promotes oral health.",
    category: "Dental Care Products"
  },
  {
    name: "Toothpaste for Sensitive Teeth",
    image: "https://media.istockphoto.com/id/185058623/photo/toothbrush-and-toothpaste-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=LZqXOPYDfXGjsox29ANe3cHVeYuqp_ZnH9je80etgPw=",
    price: "Ksh 180",
    desc: "Keeps teeth clean and healthy.",
    category: "Dental Care Products"
  },
  {
    name: "Dental Floss Picks",
    image: "https://media.istockphoto.com/id/1785231448/photo/flat-lay-composition-with-dental-floss-picks-on-blue.webp?a=1&b=1&s=612x612&w=0&k=20&c=bMOMtShXH2-CnQo05S4ItF29KZtPPJ820YankgXYx3s=",
    price: "Ksh 100",
    desc: "Removes plaque and food particles.",
    category: "Dental Care Products"
  },
  {
    name: "Mouthwash for Bad Breath",
    image: "https://media.istockphoto.com/id/2187673242/photo/woman-pouring-mouthwash-into-cap.webp?a=1&b=1&s=612x612&w=0&k=20&c=5poNHfRR0wISVdxmGqfPDRxTrhdZ_7-hkauXD90_uJ8=",
    price: "Ksh 150",
    desc: "Keeps teeth clean and healthy.",
    category: "Dental Care Products"

  },
  {
    name: "Dental Sealants",
    image: "https://media.istockphoto.com/id/471617516/photo/seal-light-cure-the-child-in-the-dental-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=mFgfY7r3wvLy004d_0qXT_AUkYFJ9DdVU2wI0S7Z5DE=",
    price: "Ksh 250",
    desc: "Protects teeth from decay.",
    category: "Dental Care Products"
  },
  {
    name: "Dental    Whitening Strips",
    image: "https://media.istockphoto.com/id/2178692499/photo/young-woman-with-red-lips-holding-a-3d-transparent-teeth-whitening-strip-to-get-rid-of-plaque.webp?a=1&b=1&s=612x612&w=0&k=20&c=zmR0WiQN70Mz5gzkOyQ0o6l7iJCgzc6Yfq70ORMSlIQ=",
    price: "Ksh 200",
    desc: "Whiten teeth and remove stains.",
    category: "Dental Care Products"

  },
  // Eye Care Products
  {
    name: "Eye Drops for Dry Eyes",
    image: "https://media.istockphoto.com/id/1201568138/photo/eye-drops-for-dry-eyes-on-a-white-background.jpg",  
    price: "Ksh 150",
    desc: "Relieves dryness and inflammation.",
    category: "Eye Care Products"
  },


  // First Aid & Wound Care
  {
    name: "Hydrogen Peroxide 100ml",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/1/VF/MZ/RF/63232778/h2o21001.PNG",
    price: "Ksh 80",
    desc: "Used for cleaning wounds.",
    category: "First Aid & Wound Care"
  },
  {
    name: "Bandage Roll (Crepe Bandage)",
    image: "https://media.istockphoto.com/id/526213113/photo/tensor-bandage.webp?a=1&b=1&s=612x612&w=0&k=20&c=_NOeObKIcZBXrKVZCYEKi0yoEu4P0sgJyZ0-2UpW3eU=",
    price: "Ksh 90",
    desc: "For strain or sprain support.",
    category: "First Aid & Wound Care"
  },
  {
    name: "Gauze Pads (10 Pads)",
    image: "https://media.istockphoto.com/id/1152810195/photo/gauzes-scissors-and-roll-gauze-on-white-background-top-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=azZTWrIFXWoXMNDcVt0XN9BvqkqYd-JGc9bTPUq0bW8=",
    price: "Ksh 50",
    desc: "For minor cuts and scrapes.",
    category: "First Aid & Wound Care"
  },
  {
    name: "Antiseptic Wipes (20 Wipes)",
    image: "https://images-cdn.ubuy.qa/65805016999d1442c92d4903-antiseptic-first-aid-wipes-20-box.jpg",
    price: "Ksh 100",
    desc: "For cleaning wounds and surfaces.",
    category: "First Aid & Wound Care"
  },
  {
    name: "Adhesive Bandages  (A PACKET)(Assorted Sizes)",
    image: "https://media.istockphoto.com/id/2168547392/photo/black-child-with-band-aid-on-his-arm-after-vaccination.webp?a=1&b=1&s=612x612&w=0&k=20&c=D1ZKQgRZNVVEN1cVlD_Rk7Jjhrv2drGeu10N37b43BQ=",
    price: "Ksh 120",
    desc: "For covering small cuts and blisters.",
    category: "First Aid & Wound Care"
  },
  {
    name: "Medical Tape (1 Roll)",
    image: "https://media.istockphoto.com/id/106557982/photo/medical-tape.webp?a=1&b=1&s=612x612&w=0&k=20&c=qOMFD99haqF1HI9YRADQL6OnlUdWMNqIKMoKABkIJZs=",
    price: "Ksh 70",
    desc: "For securing dressings and bandages.",
    category: "First Aid & Wound Care"
  },
  {
    name: "Burn Cream (50g)",
    image: "https://media.istockphoto.com/id/972888932/photo/child-hand-with-second-degree-burn.webp?a=1&b=1&s=612x612&w=0&k=20&c=60eeZq0e16YOVPJPVXg9gx5bBCnBp_6VSUhW6ikUzFs=",
    price: "Ksh 200",
    desc: "Soothes and protects minor burns.",
    category: "First Aid & Wound Care"
  },
  {
    name: "Antibiotic Ointment (15g)",
    image: "https://media.istockphoto.com/id/1299653664/photo/triple-antibiotic-ointment-squirted-from-the-tube.webp?a=1&b=1&s=612x612&w=0&k=20&c=3dItVIR1RXifJhl4_5FbywhxToNBklAWcNVKbdjmoII=",
    price: "Ksh 150",
    desc: "Prevents infection in minor cuts and scrapes.",
    category: "First Aid & Wound Care"
  },

  // Pediatric Care
  {
    name: "Children's Multivitamin Syrup",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=60",
    price: "Ksh 210",
    desc: "Supports healthy growth in children.",
    category: "Pediatric Care"
  },
  {
    name: "Baby Lotion",
    image: "https://plus.unsplash.com/premium_photo-1687900531763-f4c9c7b99dca?w=200",
    price: "Ksh 190",
    desc: "Gentle moisturizer for baby's skin.",
    category: "Pediatric Care"
  }
];

const PharmacyProducts = () => {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState("");

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    setMessage(`${product.name} added to cart!`);
    setTimeout(() => setMessage(""), 1500);
  };

  const handleBuyNow = (product) => {
    setMessage(`Proceeding to buy: ${product.name}`);
    setTimeout(() => setMessage(""), 1800);
    // In a real app, redirect to checkout with this product.
  };

  const groupedProducts = categories.reduce((groups, category) => {
    groups[category] = products.filter((p) => p.category === category);
    return groups;
  }, {});

  return (
    <section className="pharmacy-products">
      <div className="pharmacy-products__container">
        <h2 className="pharmacy-products__title">Medicines Available</h2>
        {message && (
          <div className="pharmacy-products__msg">
            {message}
          </div>
        )}
        {categories.map((category) =>
          groupedProducts[category] && groupedProducts[category].length > 0 ? (
            <div key={category} className="pharmacy-products__category">
              <h3 className="pharmacy-products__category-title">{category}</h3>
              <div className="pharmacy-products__list">
                {groupedProducts[category].map((product) => (
                  <div className="pharmacy-product" key={product.name}>
                    <img src={product.image} alt={product.name} className="pharmacy-product__img" />
                    <div className="pharmacy-product__info">
                      <h3 className="pharmacy-product__name">{product.name}</h3>
                      <p className="pharmacy-product__desc">{product.desc}</p>
                      {product.extra && (
                        <div className="pharmacy-product__extra">{product.extra}</div>
                      )}
                      <span className="pharmacy-product__price">{product.price}</span>
                      <div className="pharmacy-product__actions">
                        <button
                          className="pharmacy-product__buy-btn"
                          onClick={() => handleBuyNow(product)}
                        >
                          Buy Now
                        </button>
                        <button
                          className="pharmacy-product__cart-icon"
                          title="Add to Cart"
                          onClick={() => handleAddToCart(product)}
                        >
                          <FaShoppingCart />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null
        )}
      </div>
    </section>
  );
};

export default PharmacyProducts;