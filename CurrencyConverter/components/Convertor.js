import { StyleSheet, View } from 'react-native';
import { Text, Divider, TextInput, Button, DropDown } from 'react-native-paper';
import { useState } from 'react';
export default function Convertor() {
    const [amount, setAmount] = useState("");
    const [convertedAmount, setConvertedAmount] = useState(null);
    const [conversionDirection, setConversionDirection] = useState('Rs to USD');
    const [result, setResult] = useState("");

    const conversionRate = {
        'Rs to USD': 0.005,
        'USD to Rs': 200,
    }

    const handleConvert = () => {
        const rate = conversionRate[conversionDirection];
        const result = parseFloat(amount) * rate;
        setConvertedAmount(result.toFixed(2));
    }

    const toggleConversionDirection = () => {
        setConversionDirection((prevDirection) =>
            prevDirection === 'Rs to USD' ? 'USD to Rs' : 'Rs to USD'
        );
        setConvertedAmount(null);
        setAmount('');
    };

            <View style={styles.header}>
                <Text variant='headlineLarge'>Currency Converter</Text>
            </View>
            <View style={styles.body}>
                <TextInput
                    label={`Amount in ${conversionDirection.split(' ')[0]}`}
                    mode="outlined"
                    keyboardType="numeric"
                    value={amount}
                    onChangeText={setAmount}
                    style={styles.input}
                />
                <Divider />
                <Button mode="contained" onPress={handleConvert} style={styles.button}>
                    Convert to {conversionDirection.split(' ')[2]}
                </Button>

                {convertedAmount && (
                    <Text variant="bodyLarge" style={styles.result}>
                        {`${amount} ${conversionDirection.split(' ')[0]} = ${convertedAmount} ${conversionDirection.split(' ')[2]}`}
                    </Text>
                )}
