import React from "react";
import Link from 'next/link'
import cImg1 from '/public/images/category/5.jpg'
import cImg2 from '/public/images/category/6.jpg'
import cImg3 from '/public/images/category/7.jpg'
import cImg4 from '/public/images/category/8.jpg'
import cImg5 from '/public/images/category/9.jpg'
import cImg6 from '/public/images/category/10.jpg'
import Image from "next/image";

const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const Categoey = [
    {
        sImg: cImg1,
        title: 'Royal Cake Decoration',
    },
    {
        sImg: cImg2,
        title: 'Chocolate Cake',
    },
    {
        sImg: cImg3,
        title: 'Simple Floral Design',
    },
    {
        sImg: cImg4,
        title: 'Cup Cake',
    },
    {
        sImg: cImg5,
        title: 'Fruit Decoration',
    },
    {
        sImg: cImg6,
        title: 'Unique Designed Cake',
    },

]


const Categorys2 = () => {
    return (
        <section className="wpo-category-section-s2 section-padding pt-0">
            <div className="container">
                <div className="wpo-section-title">
                    <span>Our Shop</span>
                    <h2>Special Product for You</h2>
                </div>
                <div className="wpo-category-wrap">
                    <div className="row">
                        {
                            Categoey.map((cat, ct) => (
                                <div className="col-xl-4 col-lg-6 col-md-6 col-12" key={ct}>
                                    <div className="wpo-category-item">
                                        <div className="wpo-category-img">
                                            <div className="wpo-category-img-inner">
                                                <Image src={cat.sImg} alt="" />
                                            </div>
                                        </div>
                                        <div className="wpo-category-text">
                                            <Link onClick={ClickHandler} href="/service">{cat.title}</Link>
                                        </div>
                                    </div>
                                </div>
                            ))

                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categorys2;