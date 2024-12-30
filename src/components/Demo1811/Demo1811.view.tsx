import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import styles from "../Demo1811/Demo1811.style";
import React, { useEffect, useState } from "react";
import { fetchApiList } from "./Demo1811.logic";
import { getNumberOfImages } from "./Demo1811.logic";

const data = [
    "The University of Transport", "The University of Technology", "The University of Social Science and Humanities",
    "The University of Transport", "The University of Technology", "The University of Social Science and Humanities",
    "The University of Transport", "The University of Technology", "The University of Social Science and Humanities",
    "The University of Transport", "The University of Technology", "The University of Social Science and Humanities"
];
const Demo1811 = () => {
    const [data, setData] = useState<string[]>([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    useEffect(() => {
        async function getData() {
            let urls = await fetchApiList(1, 2);
            setData(urls);
        }
        getData();
    }, []);
    const loadMoreData = async () => {
        if(pageNumber+1<=totalPage){

        }
        let urls = await fetchApiList(pageNumber + 1, 3);
        setData(previous => [...previous, ...urls]);
        let total = await getNumberOfImages();
        setTotalPage(Math.ceiling(total / 3));
        setPageNumber(previous => previous + 1);
    }
    const handleHandleRenderItem = ({ item }: any) => {
        return (
            <View style={styles.item}>
                <Image source={{ uri: 'https://alta-s3.dev-altamedia.com/cuong-test/images/1.jpg' }}
                    style={{ width: 400, height: 400 }}
                />
                {/* <TouchableOpacity>
                    <Text>{item}</Text>
                </TouchableOpacity> */}
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <FlatList data={data} renderItem={handleHandleRenderItem}
                onEndReached={loadMoreData}
                onEndReachedThreshold={0.7}
            />
        </View>

    )
};
export default Demo1811;