for (let index = 0; index < object.length; index++) {
    const element = array[index];
    console.log(element);
}

async function deleteDomainCookies(domain) {
    let cookiesDeleted = 0;
    try {
        const cookies = await chrome.cookies.getAll({ domain });
        console.log(cookies)
        if (cookies.length === 0) {
            return "No cookies found";
        }


        cookies.map((err) => {

            console.log(err)
            for (let index = 0;  Object.length; index++) {
                const element = Object[index];
                console.log(element);
                let h = `<input type="radio" name="accordion" id="cb2" />
                 <section class="box">
                    <label class="box-title" for="cb2">${element.sameSite} <button><img src="bin.png" class="dlt_btn"></button></label>
                    <div class="box-content">
                        <label class="box-close" for="acc-close"></label>
                        <span class="lable_heading">Name</span>
                        <input type="text" id="fname" value=${element.name} name="firstname" placeholder="enter name..">
                        <div class="flex_box">
                            <img src="bin.png" class="delete-btn">
                            <img src="sim-card.png" class="delete-btn_1">
                        </div>
                    </div>
                    <div class="box-content">
                        <label class="box-close1" for="acc-close"></label>
                        <span class="lable_heading1">value</span>
                        <input type="text" id="fname"  value=${element.value} placeholder="enter>
                    </div>
                    <div class="box-content">
                        <label class="box-close" for="acc-close"></label>
                        <span class="lable_heading">Domain</span>
                        <input type="text" id="fname" name="domain" value=${element.domain} placeholder="">
                    </div>
                    <div class="box-content">
                        <label class="box-close" for="acc-close"></label>
                        <span class="lable_heading">Path</span>
                        <input type="text" id="fname" name="pathname" value=${element.path} placeholder="\">
                    </div>
                    <div class="box-content">
                        <label class="box-close" for="acc-close"></label>
                        <span class="lable_heading">Expiration</span>
                        <input type="text" id="fname" value=${element.expirationDate} name="expiration" placeholder="...">
                    </div>
                </section>
            `


                       let append  = document.getElementById("append").innerHTML = h

            }
        })







        // cookies.map(item => {
        //     for (const key in cookies ) {

        //         const element = cookies[key];
        //         console.log(element);
        //         // console.log(element.key[0], "kkjjknjb")
        //         // console.log(element);

        //         let h = `<input type="radio" name="accordion" id="cb2" />
        //         <section class="box">
        //            <label class="box-title" for="cb2">${element.sameSite} <button><img src="bin.png" class="dlt_btn"></button></label>
        //            <div class="box-content">
        //                <label class="box-close" for="acc-close"></label>
        //                <span class="lable_heading">Name</span>
        //                <input type="text" id="fname" value=${element.name} name="firstname" placeholder="enter name..">
        //                <div class="flex_box">
        //                    <img src="bin.png" class="delete-btn">
        //                    <img src="sim-card.png" class="delete-btn_1">
        //                </div>
        //            </div>
        //            <div class="box-content">
        //                <label class="box-close1" for="acc-close"></label>
        //                <span class="lable_heading1">value</span>
        //                <input type="text" id="fname"  value=${element.value} placeholder="enter>
        //            </div>
        //            <div class="box-content">
        //                <label class="box-close" for="acc-close"></label>
        //                <span class="lable_heading">Domain</span>
        //                <input type="text" id="fname" name="domain" value=${element.domain} placeholder="">
        //            </div>
        //            <div class="box-content">
        //                <label class="box-close" for="acc-close"></label>
        //                <span class="lable_heading">Path</span>
        //                <input type="text" id="fname" name="pathname" value=${element.path} placeholder="\">
        //            </div>
        //            <div class="box-content">
        //                <label class="box-close" for="acc-close"></label>
        //                <span class="lable_heading">Expiration</span>
        //                <input type="text" id="fname" value=${element.expirationDate} name="expiration" placeholder="...">
        //            </div>
        //        </section>
        //    `



        //         let append  = document.getElementById("append").innerHTML = h

        //     }
        // }).

        // let pending = cookies.map(deleteCookie);
        // await Promise.all(pending);

        // cookiesDeleted = pending.length;
    } catch (error) {
        return `Unexpected error: ${error.message}`;
    }

    return `Deleted ${cookiesDeleted} cookie(s).`;
}