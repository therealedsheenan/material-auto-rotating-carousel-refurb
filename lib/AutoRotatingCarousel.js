'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutoRotatingCarousel = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var _colors = require('material-ui/styles/colors');

var _arrowBack = require('material-ui/svg-icons/navigation/arrow-back');

var _arrowBack2 = _interopRequireDefault(_arrowBack);

var _arrowForward = require('material-ui/svg-icons/navigation/arrow-forward');

var _arrowForward2 = _interopRequireDefault(_arrowForward);

var _Dots = require('./Dots');

var _Dots2 = _interopRequireDefault(_Dots);

var _SwipableCarouselView = require('./SwipableCarouselView');

var _SwipableCarouselView2 = _interopRequireDefault(_SwipableCarouselView);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var desktopStyles = {
  arrowLeft: {
    width: 48,
    height: 48,
    position: 'absolute',
    top: 'calc((100% - 96px) / 2 + 24px)',
    left: -96
  },
  arrowRight: {
    width: 48,
    height: 48,
    position: 'absolute',
    top: 'calc((100% - 96px) / 2 + 24px)',
    right: -96
  },
  carouselWrapper: {
    overflow: 'hidden',
    borderRadius: 14,
    transform: 'scale(1.0)',
    background: 'transparent',
    height: '100%'
  },
  arrowIconButton: {
    width: 48,
    height: 48,
    padding: 4
  },
  arrowIcon: {
    color: _colors.grey700
  },
  root: {
    height: '100%',
    width: '100%',
    position: 'fixed',
    zIndex: 1400,
    left: 0,
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    transition: 'opacity 400ms cubic-bezier(0.4, 0, 0.2, 1)'
  },
  content: {
    width: '60%',
    maxWidth: 700,
    height: 'calc(100% - 96px)',
    maxHeight: 600,
    margin: '-16px auto 0',
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  dots: {
    paddingTop: 60,
    margin: '0 auto'
  },
  footer: {
    marginTop: -72,
    width: '100%',
    position: 'relative',
    textAlign: 'center'
  },
  slide: {
    width: '100%',
    height: '100%'
  },
  carousel: {
    height: '100%'
  },
  carouselContainer: {
    height: '100%'
  }
};

var mobileStyles = {
  root: {
    height: '100%',
    width: '100%',
    position: 'fixed',
    zIndex: 1400,
    left: 0,
    top: 0
  },
  content: {},
  dots: {
    paddingTop: 24,
    margin: '0 auto'
  },
  dotsLandscape: {
    paddingTop: 20,
    margin: '0 auto'
  },
  footer: {
    marginTop: -92,
    width: '100%',
    position: 'relative',
    textAlign: 'center'
  },
  footerLandscape: {
    marginTop: -3,
    transform: 'translateY(-50vh)',
    textAlign: 'center',
    display: 'inline-block'
  },
  slide: {
    width: '100%',
    height: '100vh'
  }
};

var AutoRotatingCarousel = exports.AutoRotatingCarousel = function (_Component) {
  _inherits(AutoRotatingCarousel, _Component);

  function AutoRotatingCarousel(props) {
    _classCallCheck(this, AutoRotatingCarousel);

    var _this = _possibleConstructorReturn(this, (AutoRotatingCarousel.__proto__ || Object.getPrototypeOf(AutoRotatingCarousel)).call(this, props));

    _this.state = {
      slideIndex: 0
    };
    return _this;
  }

  _createClass(AutoRotatingCarousel, [{
    key: 'handleChange',
    value: function handleChange(slideIndex) {
      this.setState({
        slideIndex: slideIndex
      }, this.onChange(slideIndex));
    }
  }, {
    key: 'decreaseIndex',
    value: function decreaseIndex() {
      var slideIndex = this.state.slideIndex - 1;
      this.setState({
        slideIndex: slideIndex
      }, this.onChange(slideIndex));
    }
  }, {
    key: 'increaseIndex',
    value: function increaseIndex() {
      var slideIndex = this.state.slideIndex + 1;
      this.setState({
        slideIndex: slideIndex
      }, this.onChange(slideIndex));
    }
  }, {
    key: 'onChange',
    value: function onChange(slideIndex) {
      this.props.onChange ? this.props.onChange((0, _util.modulo)(slideIndex, this.props.children.length)) : null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var style = this.props.mobile ? mobileStyles : desktopStyles;
      var landscape = this.props.mobile && this.props.landscape;

      return _react2.default.createElement(
        'div',
        {
          style: _extends({}, style.root, {
            pointerEvents: this.props.open ? null : 'none',
            opacity: this.props.open ? '1' : '0'
          }, this.props.style),
          onTouchTap: this.props.onRequestClose
        },
        _react2.default.createElement(
          'div',
          { style: _extends({}, style.content, this.props.contentStyle),
            onTouchTap: function onTouchTap(evt) {
              return evt.stopPropagation() || evt.preventDefault();
            } },
          _react2.default.createElement(
            _materialUi.Paper,
            {
              zDepth: this.props.mobile ? 0 : 1,
              style: style.carouselWrapper },
            _react2.default.createElement(
              _SwipableCarouselView2.default,
              {
                autoplay: this.props.open && this.props.autoplay,
                interval: this.props.interval,
                index: this.state.slideIndex,
                onChangeIndex: function onChangeIndex(slideIndex) {
                  return _this2.handleChange(slideIndex);
                },
                style: style.carousel,
                containerStyle: style.carouselContainer,
                slideStyle: style.slide
              },
              this.props.children.map(function (c, i) {
                return _react2.default.cloneElement(c, {
                  mobile: _this2.props.mobile,
                  landscape: _this2.props.landscape,
                  key: i
                });
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { style: landscape ? { minWidth: 300, maxWidth: 'calc(50% - 48px)', padding: 24, float: 'right' } : null },
            _react2.default.createElement(
              'div',
              { style: landscape ? style.footerLandscape : style.footer },
              this.props.label && _react2.default.createElement(_materialUi.RaisedButton, {
                label: this.props.label,
                onTouchTap: this.props.onStart
              }),
              _react2.default.createElement(_Dots2.default, {
                count: this.props.children.length,
                index: (0, _util.modulo)(this.state.slideIndex, this.props.children.length),
                style: landscape ? style.dotsLandscape : style.dots
              })
            )
          ),
          !this.props.mobile ? _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              _materialUi.Paper,
              {
                style: style.arrowLeft,
                circle: true
              },
              _react2.default.createElement(
                _materialUi.IconButton,
                {
                  style: style.arrowIconButton,
                  iconStyle: style.arrowIcon,
                  onTouchTap: function onTouchTap() {
                    return _this2.decreaseIndex();
                  },
                  touch: true
                },
                _react2.default.createElement(_arrowBack2.default, null)
              )
            ),
            _react2.default.createElement(
              _materialUi.Paper,
              {
                style: style.arrowRight,
                circle: true
              },
              _react2.default.createElement(
                _materialUi.IconButton,
                {
                  style: style.arrowIconButton,
                  iconStyle: style.arrowIcon,
                  onTouchTap: function onTouchTap() {
                    return _this2.increaseIndex();
                  },
                  touch: true
                },
                _react2.default.createElement(_arrowForward2.default, null)
              )
            )
          ) : null
        )
      );
    }
  }]);

  return AutoRotatingCarousel;
}(_react.Component);

AutoRotatingCarousel.defaultProps = {
  onRequestClose: function onRequestClose() {}
};


AutoRotatingCarousel.propTypes = {
  autoplay: _react.PropTypes.bool,
  contentStyle: _react.PropTypes.object,
  interval: _react.PropTypes.number,
  label: _react.PropTypes.string,
  mobile: _react.PropTypes.bool,
  landscape: _react.PropTypes.bool,
  onChange: _react.PropTypes.func,
  onStart: _react.PropTypes.func,
  open: _react.PropTypes.bool,
  style: _react.PropTypes.object
};