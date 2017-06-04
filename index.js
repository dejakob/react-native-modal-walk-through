import React, {Component} from 'react';
import {Modal, FlatList, View, Dimensions, StyleSheet} from 'react-native';

/**
 * <ModalWalkThrough />
 */
class ModalWalkThrough extends Component {
    constructor() {
        super();

        this.goToStep = this.goToStep.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.renderChild = this.renderChild.bind(this);
    }

    componentWillMount() {
        this.state = {
            visible: this.props.visible
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible !== this.state.visible) {
            this.state.visible = nextProps.visible;
        }
    }

    goToStep(index = 0) {
        if (index > this.props.children.length - 1) {
            this.setState({visible: false});

            if (typeof this.props.onFinish === 'function') {
                this.props.onFinish();
            }
        }
        else {
            const width = this.props.width || Dimensions.get('window').width * 0.8;
            this.flatList.scrollToOffset({animated: true, offset: index * width});
        }
    }

    handleScroll(eventData) {
        if (typeof this.props.onStepChange === 'function') {
            const { x } = eventData.nativeEvent.contentOffset;
            const step = Math.round(x / (this.props.width || Dimensions.get('window').width * 0.8));

            this.props.onStepChange(step);
        }
    }

    render() {
        return (
            <Modal
                transparent={true}
                animationType="fade"
                visible={this.state.visible}
            >
                <View
                    style={style.overlay}
                >
                    <FlatList
                        data={this.props.children}
                        renderItem={this.renderChild}
                        horizontal={true}
                        style={[style.list, { maxHeight: this.props.height || '40%', width: this.props.width || '80%' }]}
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        ref={flatList => this.flatList = flatList}
                        onScroll={this.handleScroll}
                    />
                </View>
            </Modal>
        );
    }

    renderChild({item, index}) {
        const {width} = Dimensions.get('window');

        return (
            <View
                key={index}
                style={[style.scene, { width: this.props.width || width * 0.8 }]}
            >
                {item}
            </View>
        );
    }
}

const style = StyleSheet.create({
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    list: {
        backgroundColor: '#ffffff',
        borderRadius: 3
    },
    scene: {
        flex: 1
    }
});

export default ModalWalkThrough;
