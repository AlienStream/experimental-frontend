import React from 'react';
import Masonry from 'react-masonry-component';



class ExploreContainer extends React.Component {
    handleLayoutComplete() {

    }

    componentDidMount() {
        this.masonry.on('layoutComplete', this.handleLayoutComplete.bind(this));
    }

    render() {
        return (
            <section className="vbox">
                <section className="scrollable">
                    <Masonry
                        id="masonry"
                        className="pos-rlt animated fadeInUpBig"
                        options={{percentPosition: true, columnWidth: '.column-width-sizer'}}
                        ref={function(c) {this.masonry = c.masonry;}.bind(this)}
                    >
                        <div className="item item-large">
                            <div className="item-overlay gd animated fadeInUp wrapper bg-info">
                                <p className="text-white">Watch later</p>
                                <div className="center text-center m-t-n">
                                    <a href="#"><i className="icon-control-play i-2x"></i></a>
                                </div>
                            </div>
                            <div className="bottom gd bg-info wrapper">
                                <div className="m-t m-b"><a href="#" className="b-b b-danger h2 text-u-c text-lt font-bold">Tincidunt</a></div>
                                <p className="hidden-xs">Vivamus vel tincidunt libero, lementum ligula vitae</p>
                            </div>
                            <a href="#"><img src="images/m31.jpg" alt="" className="img-full" /></a>
                        </div>
                        <div className="item item-tall column-width-sizer">
                            <div className="item-overlay gd animated fadeInUp wrapper bg-info">
                                <p className="text-white">Watch later</p>
                                <div className="center text-center m-t-n">
                                    <a href="#"><i className="icon-control-play i-2x"></i></a>
                                </div>
                            </div>
                            <div className="bottom gd bg-info wrapper">
                                <div className="m-t m-b"><a href="#" className="b-b b-info h4 text-u-c text-lt font-bold">Tincidunt</a></div>
                                <p className="hidden-xs">Vivamus vel tincidunt libero, lementum ligula vitae</p>
                            </div>
                            <a href="#"><img src="images/m31.jpg" alt="" className="img-full" /></a>
                        </div>
                        <div className="item">
                            <div className="bottom gd bg-info wrapper">
                                <div className="m-t m-b"><a href="#" className="b-b b-warning h4 text-u-c text-lt font-bold">Duis</a></div>
                                <p className="hidden-xs">Tincidunt libero vitae elementum</p>
                            </div>
                            <a href="#"><img src="images/m10.jpg" alt="" className="img-full" /></a>
                        </div>
                        <div className="item">
                            <div className="item-overlay active bg-primary dker wrapper text-center">
                                <div className="m-t m-b"><a href="#" className="b-b b-white h4 text-u-c text-lt font-bold">lementum</a></div>
                                <p className="hidden-xs">lementum ligula vitae est quis congue ero</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="bottom gd bg-info wrapper">
                                <div className="m-t m-b"><a href="#" className="b-b b-info h4 text-u-c text-lt font-bold">Diam</a></div>
                                <p className="hidden-xs">Con malesuada est, quis congue nibhs</p>
                            </div>
                            <a href="#"><img src="images/m4.jpg" alt="" className="img-full" /></a>
                        </div>
                        <div className="item">
                            <div className="item-overlay active bg-info  dker wrapper text-center">
                                <div className="m-t m-b"><a href="#" className="b-b b-white h4 text-u-c text-lt font-bold">lementum</a></div>
                                <p className="hidden-xs">lementum ligula vitae est quis congue ero</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="bottom gd bg-info wrapper">
                                <div className="m-t m-b"><a href="#" className="b-b b-info h4 text-u-c text-lt font-bold">Vivamus</a></div>
                                <p className="hidden-xs">Morbi id neque quam. Aliquam sollicitudin venenatis ipsum</p>
                            </div>
                            <a href="#"><img src="images/m13.jpg" alt="" className="img-full" /></a>
                        </div>
                        <div className="item item-tall">
                            <div className="bottom gd bg-info wrapper">
                                <div className="m-t m-b"><a href="#" className="b-b b-warning h4 text-u-c text-lt font-bold">Libero</a></div>
                                <p className="hidden-xs">Aliquam sollicitudin venenatis ipsum</p>
                            </div>
                            <a href="#"><img src="images/m30.jpg" alt="" className="img-full" /></a>
                        </div>
                        <div className="item">
                            <div className="bottom gd bg-info wrapper">
                                <div className="m-t m-b"><a href="#" className="b-b b-info h4 text-u-c text-lt font-bold">habitant</a></div>
                                <p className="hidden-xs">Vel tincidunt libero, vitae ligula tristique</p>
                            </div>
                            <a href="#"><img src="images/m19.jpg" alt="" className="img-full" /></a>
                        </div>
                        <div className="item">
                            <div className="item-overlay active bg-success dker wrapper text-center">
                                <div className="m-t m-b"><a href="#" className="b-b b-info h4 text-u-c text-lt font-bold">Ligula</a></div>
                                <p className="hidden-xs">Sesuada est, quis congue tincidunt libero nibh ligula</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="bottom gd bg-info wrapper">
                                <div className="m-t m-b"><a href="#" className="b-b b-info h4 text-u-c text-lt font-bold">Malesuada</a></div>
                                <p className="hidden-xs">Pellentesque habitant morbi tristique sodales</p>
                            </div>
                            <a href="#"><img src="images/m7.jpg" alt="" className="img-full" /></a>
                        </div>
                        <div className="item">
                            <div className="bottom gd bg-info wrapper">
                                <div className="m-t m-b"><a href="#" className="b-b b-info h4 text-u-c text-lt font-bold">Donec</a></div>
                                <p className="hidden-xs">Vestibulum ullamcorper</p>
                            </div>
                            <a href="#"><img src="images/m18.jpg" alt="" className="img-full" /></a>
                        </div>
                        <div className="item item-tall">
                            <div className="bottom gd bg-info wrapper">
                                <div className="m-t m-b"><a href="#" className="b-b b-primary h4 text-u-c text-lt font-bold">Eleifend</a></div>
                                <p className="hidden-xs">Malesuada augue. Donec eleifend condimentum</p>
                            </div>
                            <a href="#"><img src="images/m32.jpg" alt="" className="img-full" /></a>
                        </div>
                        <div className="item item-wide">
                            <div className="bottom gd bg-info wrapper">
                                <div className="m-t m-b"><a href="#" className="b-b b-info h4 text-u-c text-lt font-bold">Sollicitudin </a></div>
                                <p className="hidden-xs">Mauris convallis mauris at pellentesque volutpat</p>
                            </div>
                            <a href="#"><img src="images/m40.jpg" alt="" className="img-full" /></a>
                        </div>
                        <div className="item item-large">
                            <div className="bottom gd bg-info wrapper">
                                <div className="m-t m-b"><a href="#" className="b-b b-warning h2 text-u-c text-lt font-bold">Senectus </a></div>
                                <p className="hidden-xs">Fermentum diam. Vivamus vel tincidunt libero, vitae elementum ligula</p>
                            </div>
                            <a href="#"><img src="images/m21.jpg" alt="" className="img-full" /></a>
                        </div>
                        <div className="item">
                            <div className="bottom gd bg-info wrapper">
                                <div className="m-t m-b"><a href="#" className="b-b b-info h4 text-u-c text-lt font-bold">Phasellus</a></div>
                                <p className="hidden-xs">Senectus et netus et malesuada fames</p>
                            </div>
                            <a href="#"><img src="images/m5.jpg" alt="" className="img-full" /></a>
                        </div>
                        <div className="item">
                            <div className="bottom gd bg-info wrapper">
                                <div className="m-t m-b"><a href="#" className="b-b b-white h4 text-u-c text-lt font-bold">Neque</a></div>
                                <p className="hidden-xs">Consectetur adipiscing elit. Morbi id neque quam</p>
                            </div>
                            <a href="#"><img src="images/a10.png" alt="" className="img-full" /></a>
                        </div>
                        <div className="item">
                            <div className="bottom gd bg-info wrapper">
                                <div className="m-t m-b"><a href="#" className="b-b b-info h4 text-u-c text-lt font-bold">Nisi ne</a></div>
                                <p className="hidden-xs">Orbi tristique senectus et netus et malesuada</p>
                            </div>
                            <a href="#"><img src="images/m4.jpg" alt="" className="img-full" /></a>
                        </div>
                        <div className="item">
                            <div className="item-overlay active bg-warning dker wrapper text-center">
                                <div className="m-t m-b"><a href="#" className="b-b b-white h4 text-u-c text-lt font-bold">Morbi</a></div>
                                <p className="hidden-xs">Dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="bottom gd bg-info wrapper">
                                <div className="m-t m-b"><a href="#" className="b-b b-info h4 text-u-c text-lt font-bold">Congue</a></div>
                                <p className="hidden-xs">Malesuada est, quis congue nibh</p>
                            </div>
                            <a href="#"><img src="images/m6.jpg" alt="" className="img-full" /></a>
                        </div>
                        <div className="item">
                            <div className="item-overlay active bg-info lt wrapper text-center">
                                <div className="m-t m-b"><a href="#" className="b-b b-white h4 text-u-c text-lt font-bold">Csesoi</a></div>
                                <p className="hidden-xs">Dolor sit ectetur elit senectus et malesuada</p>
                            </div>
                        </div>
                        <div className="item item-wide">
                            <div className="bottom gd bg-info wrapper">
                                <div className="m-t m-b"><a href="#" className="b-b b-info h4 text-u-c text-lt font-bold">Consectetur</a></div>
                                <p className="hidden-xs">Adipiscing elit senectus et netus mal.</p>
                            </div>
                            <a href="#"><img src="images/m42.jpg" alt="" className="img-full" /></a>
                        </div>
                        <div className="item">
                            <div className="bottom gd bg-info wrapper">
                                <div className="m-t m-b"><a href="#" className="b-b b-info h4 text-u-c text-lt font-bold">Morbi</a></div>
                                <p className="hidden-xs">Dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <a href="#"><img src="images/m9.jpg" alt="" className="img-full" /></a>
                        </div>
                        <div className="item">
                            <div className="bottom gd bg-info wrapper">
                                <div className="m-t m-b"><a href="#" className="b-b b-info h4 text-u-c text-lt font-bold">Soesle</a></div>
                                <p className="hidden-xs">Adipiscing elituis congue</p>
                            </div>
                            <a href="#"><img src="images/a7.png" alt="" className="img-full" /></a>
                        </div>
                        <div className="item">
                            <div className="bottom gd bg-info wrapper">
                                <div className="m-t m-b"><a href="#" className="b-b b-info h4 text-u-c text-lt font-bold">Congue</a></div>
                                <p className="hidden-xs">Malesuada est, congue nibh quis elituis</p>
                            </div>
                            <a href="#"><img src="images/m12.jpg" alt="" className="img-full" /></a>
                        </div>
                    </Masonry>
                </section>
            </section>
        );
    }
}

export default ExploreContainer
