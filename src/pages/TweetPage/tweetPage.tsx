import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

import backArrow from "@/assets/icons/left.svg";
import { Tweet } from "@/components";
import { DbCollections } from "@/constants";
import { db } from "@/firebase";
import { ITweet } from "@/interfaces";

import { BackIcon } from "./tweetpage.styled";

const TweetPage: FC = () => {
    const [tweet, setTweet] = useState<ITweet | null>(null);

    const { id } = useParams();
    const navigate = useNavigate();

    const backClickHandler = (): void => {
        navigate(-1);
    };

    useEffect(() => {
        if (id) {
            const docRef = doc(db, DbCollections.tweets, id);
            getDoc(docRef)
                .then((response) => {
                    if (response.exists()) {
                        setTweet(response.data() as ITweet);
                    }
                })
                .catch(() => {});
        }
    }, []);

    return (
        <div>
            <BackIcon src={backArrow} alt="back" onClick={backClickHandler} />
            {id && tweet && <Tweet id={id} tweet={tweet} />}
        </div>
    );
};

export default TweetPage;
