import React from 'react'
import { Link } from 'react-router-dom'

// image etc
import PhoneHero from '../assets/images/png-phone.svg'
import Profile1 from '../assets/images/1.png'
import Profile2 from '../assets/images/2.png'
import Profile3 from '../assets/images/3.png'
import PatnerImg from '../assets/images/partner.svg'
import PhoneFeature from '../assets/images/png-phone2.svg'
import {FiLock, FiPhone, FiDownload} from 'react-icons/fi' 
// image etc

function LandingPage() {
    return (
        <>
        <header>
        <nav>
            <div>
                <span className="logoZwallet">BooWallet</span>
            </div>
            <div className="navBtn">
                <Link to={"/login"}>
                <button className="buttonLogin">Login</button>
                </Link>
                <Link to={"/signup"}>
                <button className="buttonSignUp">Sign Up</button>
                </Link>
            </div>
            <div className="btnDesk">
                <Link to={"/login"}>
                <button className="buttonLogin">Login</button>
                </Link>
                <Link to={"/signup"}>
                <button className="buttonSignUp">Sign Up</button>
                </Link>
                
            </div>
        </nav>
        <section className="newHero">
            <div className="newHeroContent">
                <p className="titleHero colorSecondary">Awesome App For Saving <span className='colorPrimary'>Time.</span></p>
                <p className="paragHero colorSecondary">We bring you a mobile app for banking problems that <br/> oftenly wasting much of your times.</p>
                <Link to={"/signup"}>
                <button className="buttonTry">Try It Free</button>
                </Link>
            </div>
            <div className='phoneHeroImageWrap'>
                <img className='responsiveImg' src={PhoneHero} alt="img Phone"/>
            </div>
        </section>
    </header>


    <section className="about">
        <div className="contentabout">
                <p className="pAbout1 colorSecondary"><span className='colorPrimary'>About</span> the Application.</p>
                <p className="pAbout2 colorSecondary">We have some great features from the application and it's totally free to use by all users around the world.</p>
            <div className="blockfeature">
                <div className="block1">
                    <div className="content">
                        <div className='dotWrap'>
                            <FiPhone size={29} className='colorPrimary'/>
                        </div>
                        <p className="pblock1 colorSecondary">24/7 Support</p>
                        <p className="pblock2 colorSecondaryTrans">We have 24/7 contact support so you can contact us whenever you want and we will respond it.</p>
                    </div>
                </div>
                <div className="block1">
                    <div className="content">
                        <div className='dotWrap'>
                            <FiLock size={29} className='colorPrimary'/>
                        </div>
                        <p className="pblock1 colorSecondary">Data Privacy</p>
                        <p className="pblock2 colorSecondaryTrans">We make sure your data is safe in our database and we will encrypt any data you submitted to us.</p>
                    </div>
                </div>
                <div className="block1">
                    <div className="content">
                        <div className='dotWrap'>
                            <FiDownload size={29} className='colorPrimary'/>
                        </div>
                        <p className="pblock1 colorSecondary">Easy Download</p>
                        <p className="pblock2 colorSecondaryTrans">Zwallet is 100% totally free to use it's now available on Google Play Store and App Store.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="partner">
        <div className="content">
            <div className="text">
                <p className="pText1 colorSecondary">100+ <span className='colorPrimary'>Trusted</span> <br/> Partners.</p>
                <p className="pText2 colorSecondaryTrans">We have reached global level and have 100+ <br/> brand partners around the globe.</p>
            </div>
            <img className='responsiveImg' src={PatnerImg} alt="phone for partner" />
        </div>
    </section>

    <section className="greatFeature">
        <div className="content">
            <img className='responsiveImg' src={PhoneFeature} alt="phone for feature"/>
            <div className="greatFeatureList">
                <p className='colorSecondary'>All The <span className='colorPrimary'>Great</span> Zwallet Features.</p>
                <div className="list">
                    <p className="p1 colorSecondary"><span className='colorPrimary'>1.</span> Small Fee</p>
                    <p className="p2 colorSecondaryTrans">We only charge 5% of every success transaction done in Zwallet app.</p>
                </div>
                <div className="list">
                    <p className="p1 colorSecondary"><span className='colorPrimary'>2.</span> Data Secured</p>
                    <p className="p2 colorSecondaryTrans">All your data is secured properly in our system and it's encrypted.</p>
                </div>
                <div className="list">
                    <p className="p1 colorSecondary"><span className='colorPrimary'>3.</span> User Friendly</p>
                    <p className="p2 colorSecondaryTrans">Zwallet come up with modern and sleek design and not complicated.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="userSaying">
    <div className="contentabout">
            <p className="pAbout1 colorSecondary">What Users are <span className='colorPrimary'>Saying.</span></p>
            <p className="pAbout2 colorSecondary">We have some great features from the application and it's totally free to use by all users around the world.</p>
        <div className="blockSaying">
            <div className="block1">
                <div className="content">
                    <img className='responsiveImg' src={Profile1} alt="profile pic" width="60" height="60" />
                    <p className="pblock1 colorSecondary">Sherina Chaw</p>
                    <p className="pblock2 colorSecondaryTrans">“I use this app since 2 years ago and this is the best app that I've ever use in my entire life”</p>
                </div>
            </div>
            <div className="block1">
                <div className="content">
                    <img className='responsiveImg' src={Profile2} alt="profile pic" width="60" height="60" />
                    <p className="pblock1 colorSecondary">Jessica Mera</p>
                    <p className="pblock2 colorSecondaryTrans">“I use Zwallet to manage all financial needs. It's super easy to use and it's 100% free app”</p>
                </div>
            </div>
            <div className="block1">
                <div className="content">
                    <img className='responsiveImg' src={Profile3} alt="profile pic" width="60" height="60" />
                    <p className="pblock1 colorSecondary">Robert Chandler</p>
                    <p className="pblock2 colorSecondaryTrans">“Since I'm using this app, I'm not going to move to another similar app. Thank you Zwallet!”</p>
                </div>
            </div>
        </div>
    </div>
    </section>

    <footer className='colorWhite'>
        <div className="content">
            <p className="pFooter1">Zwallet</p>
            <p className="pFooter2">Simplify financial needs and saving much time in banking needs with one single app.</p>
            <hr className="garis"/>
            <div className="contact">
                <p>2020 Zwallet. All right reserved.</p>
                <div className="contact2">
                    <p>+62 5637 8882 9901</p>
                    <p>contact@zwallet.com</p>
                </div>
            </div>
        </div>
    </footer>
        </>
    )
}

export default LandingPage