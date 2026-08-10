function countHashtags(caption) {
    // Write your code here...

    if(typeof caption !== "string"){
        return `Invalid`;
    }

    const words = caption.split(" ");

    const hashtags = [];

    for(const word of words){
        if(word.startsWith("#")){
            hashtags.push(word);
        }
    }

    let longest = "";

    for(const hashtag of hashtags){
        const tag = hashtag.slice(1);

        if(tag.length>longest.length){
            longest = tag;
        }
    }

    return{ hashtagCount: hashtags.length, longestTag: longest };
}