interface IItem {
    image: string
}

export const editLink = (link: string) => {
    let newLink;
    if (link !== "") {
        newLink = link.split("https://www.youtube.com/watch?v=")
        return (newLink[1])
    } else return ""
}

export const pushImages = (items: IItem[]) => {
    if (items !== null) {
        let images: { url: string }[] = []
        items.forEach(function (item) {
            if (item.image !== "") {
                images.push({url: item.image})
            }
        })
        return images
    } else return []
}


