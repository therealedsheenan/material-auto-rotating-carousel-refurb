'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.Slide = Slide;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _colors = require('material-ui/styles/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  mobile: {
    root: {
      color: 'white',
      backgroundColor: _colors.blue500,
      height: '100%'
    },
    media: {
      position: 'relative',
      top: '50%',
      transform: 'translateY(-50%)'
    },
    mediaBackground: {
      backgroundColor: _colors.blue700,
      height: 'calc(100% - 241px)',
      textAlign: 'center'
    },
    subtitle: {
      fontSize: '15px',
      fontWeight: 400,
      lineHeight: '18px',
      margin: 0
    },
    text: {
      textAlign: 'center',
      maxWidth: '80%',
      margin: '0 auto',
      paddingTop: 30
    },
    title: {
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: '32px',
      marginBottom: 8
    }
  },
  mobileLandscape: {
    root: {
      color: 'white',
      backgroundColor: _colors.blue500,
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'row'
    },
    media: {
      position: 'relative',
      top: '50%',
      transform: 'translateY(-50%)'
    },
    mediaBackground: {
      backgroundColor: _colors.blue700,
      height: '100%',
      textAlign: 'center',
      flex: '1 1',
      alignSelf: 'stretch'
    },
    subtitle: {
      fontSize: '15px',
      fontWeight: 400,
      lineHeight: '18px',
      margin: 0
    },
    text: {
      minWidth: 300,
      maxWidth: 'calc(50% - 48px)',
      padding: '24px 24px 128px',
      flex: '0 1',
      alignSelf: 'center'
    },
    title: {
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: '32px',
      marginBottom: 8
    }
  },
  desktop: {
    root: {
      color: 'white',
      backgroundColor: _colors.blue500,
      height: '100%'
    },
    media: {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    mediaBackground: {
      backgroundColor: _colors.blue700,
      height: 'calc(100% - 216px)',
      textAlign: 'center'
    },
    subtitle: {
      fontSize: '15px',
      fontWeight: 400,
      lineHeight: '18px',
      margin: 0
    },
    text: {
      textAlign: 'center',
      maxWidth: '80%',
      margin: '0 auto',
      paddingTop: 32
    },
    title: {
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: '32px',
      marginBottom: 12,
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    }
  }
};

function Slide(props) {
  var contentStyle = props.contentStyle,
      media = props.media,
      mediaBackgroundStyle = props.mediaBackgroundStyle,
      mediaStyle = props.mediaStyle,
      subtitle = props.subtitle,
      subtitleStyle = props.subtitleStyle,
      textStyle = props.textStyle,
      title = props.title,
      titleStyle = props.titleStyle,
      mobile = props.mobile,
      landscape = props.landscape;


  var style = mobile ? landscape ? styles.mobileLandscape : styles.mobile : styles.desktop;

  return _react2.default.createElement(
    'div',
    { style: _extends({}, style.root, contentStyle) },
    _react2.default.createElement(
      'div',
      { style: _extends({}, style.mediaBackground, mediaBackgroundStyle) },
      _react2.default.createElement(
        'div',
        { style: _extends({}, style.media, mediaStyle) },
        _react2.default.cloneElement(media, {
          style: _extends({}, media.style, { maxHeight: '100%' })
        })
      )
    ),
    _react2.default.createElement(
      'div',
      { style: _extends({}, style.text, textStyle) },
      _react2.default.createElement(
        'div',
        { style: _extends({}, style.title, titleStyle) },
        title
      ),
      _react2.default.createElement(
        'p',
        { style: _extends({}, style.subtitle, subtitleStyle) },
        subtitle
      )
    )
  );
}

Slide.propTypes = {
  contentStyle: _react.PropTypes.object,
  media: _react.PropTypes.node.isRequired,
  mediaBackgroundStyle: _react.PropTypes.object,
  mediaStyle: _react.PropTypes.object,
  subtitle: _react.PropTypes.string.isRequired,
  subtitleStyle: _react.PropTypes.object,
  textStyle: _react.PropTypes.object,
  title: _react.PropTypes.string.isRequired,
  titleStyle: _react.PropTypes.object,
  mobile: _react.PropTypes.bool,
  landscape: _react.PropTypes.bool
};