import * as React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Chip, List, withTheme } from 'react-native-paper';


class Chip1 extends React.Component {

    render() {
        const { colors } = this.props.theme;

        return (
            <ScrollView
                style={[styles.container, { backgroundColor: colors.surface }]}
            >
                <List.Section title="Flat chip">
                    <View style={styles.row}>
                        <Chip onPress={() => { }} style={styles.chip}>
                            Simple
            </Chip>
                        <Chip onPress={() => { }} onClose={() => { }} style={styles.chip}>
                            Close button
            </Chip>
                        <Chip
                            icon="favorite"
                            onPress={() => { }}
                            onClose={() => { }}
                            style={styles.chip}
                        >
                            Icon
            </Chip>
                        <Chip
                            avatar={<Image source={{ uri: 'http://i68.tinypic.com/2qiqzxt.png' }} />}
                            onPress={() => { }}
                            onClose={() => { }}
                            style={styles.chip}
                        >
                            Avatar
            </Chip>
                        <Chip
                            selected
                            avatar={<Image source={{ uri: 'http://i68.tinypic.com/2qiqzxt.png' }} />}
                            onPress={() => { }}
                            style={styles.chip}
                        >
                            Avatar (selected)
            </Chip>
                        <Chip
                            disabled
                            icon="favorite"
                            onClose={() => { }}
                            style={styles.chip}
                        >
                            Icon (disabled)
            </Chip>
                        <Chip
                            disabled
                            avatar={<Image source={{ uri: 'http://i68.tinypic.com/2qiqzxt.png' }} />}
                            style={styles.chip}
                        >
                            Avatar (disabled)
            </Chip>
                    </View>
                </List.Section>
                <List.Section title="Outlined chip">
                    <View style={styles.row}>
                        <Chip mode="outlined" onPress={() => { }} style={styles.chip}>
                            Simple
            </Chip>
                        <Chip
                            mode="outlined"
                            onPress={() => { }}
                            onClose={() => { }}
                            style={styles.chip}
                        >
                            Close button
            </Chip>
                        <Chip
                            mode="outlined"
                            icon="favorite"
                            onPress={() => { }}
                            onClose={() => { }}
                            style={styles.chip}
                        >
                            Icon
            </Chip>
                        <Chip
                            mode="outlined"
                            avatar={<Image source={{ uri: 'http://i68.tinypic.com/2qiqzxt.png' }} />}
                            onPress={() => { }}
                            style={styles.chip}
                        >
                            Avatar
            </Chip>
                        <Chip
                            selected
                            mode="outlined"
                            avatar={<Image source={{ uri: 'http://i68.tinypic.com/2qiqzxt.png' }} />}
                            onPress={() => { }}
                            style={styles.chip}
                        >
                            Avatar (selected)
            </Chip>
                        <Chip
                            disabled
                            mode="outlined"
                            icon="favorite"
                            onClose={() => { }}
                            style={styles.chip}
                        >
                            Icon (disabled)
            </Chip>
                        <Chip
                            disabled
                            mode="outlined"
                            avatar={<Image source={{ uri: 'http://i68.tinypic.com/2qiqzxt.png' }} />}
                            style={styles.chip}
                        >
                            Avatar (disabled)
            </Chip>
                    </View>
                </List.Section>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 12,
    },
    chip: {
        margin: 4,
    },
});

export default withTheme(Chip1);