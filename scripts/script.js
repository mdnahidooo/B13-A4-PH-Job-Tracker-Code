// console.log("JavaScript connected!!!!");
let interviewList = [];
let rejectedList = [];
let currentStatus = 'all'

const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");

const jobsCount = document.getElementById("jobsCount");
const deleteBtn = document.querySelectorAll(".delete-btn");

const allTabBtn = document.getElementById("all-tab-btn");
const interviewTabBtn = document.getElementById("interview-tab-btn");
const rejectedTabBtn = document.getElementById("rejected-tab-btn");

const allCardSections = document.getElementById("cards-section");
const noCardSections = document.getElementById("no-job-card-section");
const interviewFilterSection = document.getElementById("interview-filtered-section");
const rejectedFilterSections = document.getElementById("rejected-filtered-section");

const mainContainer = document.querySelector('main');
// console.log(mainContainer)


function calculateCount() {
    totalCount.innerText = allCardSections.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;

}

calculateCount();


function showOnly(id) {
    // adding white bg for all
    allTabBtn.classList.add('bg-white', 'text-black')
    interviewTabBtn.classList.add('bg-white', 'text-black')
    rejectedTabBtn.classList.add('bg-white', 'text-black')


    // if any button has blue then remove
    allTabBtn.classList.remove('bg-blue-500', 'text-white')
    interviewTabBtn.classList.remove('bg-blue-500', 'text-white')
    rejectedTabBtn.classList.remove('bg-blue-500', 'text-white')


    // console.log(id);
    const selected = document.getElementById(id)//this is the button that clicked for filter

    currentStatus = id
    // console.log(currentStatus);
    // console.log(selected);

    // adding blue bg for current button
    selected.classList.remove('bg-white', 'text-black');
    selected.classList.add('bg-blue-500', 'text-white');

    if (id == 'interview-tab-btn') {
        if (interviewList.length === 0) {
            noCardSections.classList.remove('hidden');
            allCardSections.classList.add('hidden');
            interviewFilterSection.classList.add('hidden');
            rejectedFilterSections.classList.add('hidden');

            jobsCount.innerText = `${interviewList.length} of 8 jobs`;
        } else {
            allCardSections.classList.add('hidden');
            interviewFilterSection.classList.remove('hidden')
            rejectedFilterSections.classList.add('hidden');
            noCardSections.classList.add('hidden');
            renderInterview()

            jobsCount.innerText = `${interviewList.length} of 8 jobs`;
        }
    } else if (id == 'all-tab-btn') {
        allCardSections.classList.remove('hidden');
        interviewFilterSection.classList.add('hidden');
        rejectedFilterSections.classList.add('hidden');
        noCardSections.classList.add('hidden');
        jobsCount.innerText = `${totalCount.innerText = allCardSections.children.length} jobs`;

        if (allCardSections.children.length == 0) {
            noCardSections.classList.remove('hidden');
        }

    } else if (id == 'rejected-tab-btn') {
        if (rejectedList.length === 0) {
            noCardSections.classList.remove('hidden');
            allCardSections.classList.add('hidden');
            interviewFilterSection.classList.add('hidden');
            rejectedFilterSections.classList.add('hidden');

            jobsCount.innerText = `${rejectedList.length} of 8 jobs`;
        } else {
            allCardSections.classList.add('hidden');
            rejectedFilterSections.classList.remove('hidden')
            noCardSections.classList.add('hidden');
            interviewFilterSection.classList.add('hidden');
            renderRejected()

            jobsCount.innerText = `${rejectedList.length} of 8 jobs`;
        }
    }
}


mainContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('interview-btn')) {
        const parenNode = event.target.parentNode.parentNode.parentNode;
        // console.log(parentNode);

        const jobTitle = parenNode.querySelector('.job-title').innerText;
        const experties = parenNode.querySelector('.experties').innerText;
        const salary = parenNode.querySelector('.salary').innerText;
        const statusBtn = parenNode.querySelector('.status-btn').innerText;
        const descriptionns = parenNode.querySelector('.descriptionns').innerText;
        // console.log(jobTitle, experties, salary, status, descriptionns)


        parenNode.querySelector('.status-btn').innerText = 'Interview';

        const cardInfo = {
            jobTitle,
            experties,
            salary,
            statusBtn: 'Interview',
            descriptionns,
        }

        const jobExist = interviewList.find(item => item.jobTitle == cardInfo.jobTitle)

        if (!jobExist) {
            interviewList.push(cardInfo)
        }

        rejectedList = rejectedList.filter(item => item.jobTitle != cardInfo.jobTitle)

        // after remove rerender the html
        if (currentStatus == 'rejected-tab-btn') {
            renderRejected()
            jobsCount.innerText = `${rejectedList.length} of 8 jobs`;

            if (rejectedList.length == 0) {
                noCardSections.classList.remove('hidden');
            }
        }

        calculateCount()

    }
    else if (event.target.classList.contains('rejected-btn')) {
        const parenNode = event.target.parentNode.parentNode.parentNode;
        // console.log(parentNode);

        const jobTitle = parenNode.querySelector('.job-title').innerText;
        const experties = parenNode.querySelector('.experties').innerText;
        const salary = parenNode.querySelector('.salary').innerText;
        const statusBtn = parenNode.querySelector('.status-btn').innerText;
        const descriptionns = parenNode.querySelector('.descriptionns').innerText;
        // console.log(jobTitle, experties, salary, status, descriptionns)

        parenNode.querySelector('.status-btn').innerText = 'Rejected';

        const cardInfo = {
            jobTitle,
            experties,
            salary,
            statusBtn: 'Rejected',
            descriptionns,
        }

        const jobExist = rejectedList.find(item => item.jobTitle == cardInfo.jobTitle)

        if (!jobExist) {
            rejectedList.push(cardInfo)
        }


        interviewList = interviewList.filter(item => item.jobTitle != cardInfo.jobTitle)

        // after remove rerender the html
        if (currentStatus == 'interview-tab-btn') {
            renderInterview()
            jobsCount.innerText = `${interviewList.length} of 8 jobs`;

            if (interviewList.length == 0) {
                noCardSections.classList.remove('hidden');
            }
        }

        calculateCount()
    }
})


function renderInterview() {
    // make the filterSection empty every time
    interviewFilterSection.innerHTML = ''

    // crating innerHtml
    for (let interview of interviewList) {
        console.log(interview);

        let div = document.createElement('div');
        div.className = 'card bg-white p-8 border-l-2 border-green-500 mb-6'
        div.innerHTML = `
         <div class="space-y-6">
                    <div class="flex justify-between">
                        <div>
                            <p class="job-title font-bold text-xl">${interview.jobTitle}</p>
                            <p class="experties text-gray-500">${interview.experties}</p>
                        </div>

                        <div>
                            <div
                                class="delete-btn w-12 h-12 border-2 border-red-100 rounded-full flex items-center justify-center shadow-lg">
                                <img src="./assets/Trash.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div>
                        <p class="salary text-gray-500">${interview.salary}</p>
                    </div>

                    <div>
                        <button class="status-btn bg-green-100 rounded-md px-5 py-2 mb-2 text-green-500 border border-green-500">${interview.statusBtn}</button>
                        <p class="descriptionns">${interview.descriptionns}</p>
                    </div>

                    <div>
                        <button class="interview-btn btn btn-outline btn-success">Interview</button>
                        <button class="rejected-btn btn btn-outline btn-secondary">Rejected</button>
                    </div>
                </div>
        `
        interviewFilterSection.appendChild(div)
    }
}

function renderRejected() {
    // make the filterSection empty every time
    rejectedFilterSections.innerHTML = ''
    // crating innerHtml
    for (let rejected of rejectedList) {

        let div = document.createElement('div');
        div.className = 'card bg-white p-8 border-l-2 border-red-500 mb-6'
        div.innerHTML = `
         <div class="space-y-6">
                    <div class="flex justify-between">
                        <div>
                            <p class="job-title font-bold text-xl">${rejected.jobTitle}</p>
                            <p class="experties text-gray-500">${rejected.experties}</p>
                        </div>

                        <div>
                            <div
                                class="delete-btn w-12 h-12 border-2 border-red-100 rounded-full flex items-center justify-center shadow-lg">
                                <img src="./assets/Trash.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div>
                        <p class="salary text-gray-500">${rejected.salary}</p>
                    </div>

                    <div>
                        <button class="status-btn bg-red-100 rounded-md px-5 py-2 mb-2 text-red-500 border border-red-500">${rejected.statusBtn}</button>
                        <p class="descriptionns">${rejected.descriptionns}</p>
                    </div>

                    <div>
                        <button class="interview-btn btn btn-outline btn-success">Interview</button>
                        <button class="rejected-btn btn btn-outline btn-secondary">Rejected</button>
                    </div>
                </div>
        `
        rejectedFilterSections.appendChild(div)
    }
}


// // for delete card
// document.addEventListener("click", function (event) {
//     // console.log(event.target.classList.contains('delete-btn'))
//     if (event.target.classList.contains('delete-btn')) {
//         const deleteCard = event.target.parentNode.parentNode.parentNode.parentNode;
//         // console.log(deleteCard);
//         alert("Are you want to delete this card?")
//         deleteCard.remove()
//         jobsCount.innerText = `${totalCount.innerText = allCardSections.children.length} jobs`;;

//         if (allCardSections.children.length == 0) {
//             noCardSections.classList.remove('hidden');
//         }
//     }
// });



// for delete card - FAST VERSION-- parentNode slow kaj korchilo 
document.addEventListener("click", function (event) {
    // Delete button or tar moddher btn e click korle
    if (event.target.closest('.delete-btn')) {

        // Direct card khuje ber koro - fastest way
        const deleteCard = event.target.closest('.card');

        if (deleteCard) {
            // Alert dew
            alert("Are you want to delete this card?");
            // direct delete koro 
            deleteCard.remove();

            // Count update koro
            const remainingCards = allCardSections.children.length;
            totalCount.innerText = remainingCards;
            jobsCount.innerText = remainingCards + ' jobs';

            // Kono card na thakle no card section show koro
            if (remainingCards === 0) {
                noCardSections.classList.remove('hidden');
            }
        }
    }
});


// after going support session i am trying again. and now working.
// Main event listener
mainContainer.addEventListener('click', function (event) {
    const target = event.target;

    // Handle Interview button
    if (target.classList.contains('interview-btn')) {
        const card = target.closest('.card');


        // change the style button
        const statusBtn = card.querySelector('.status-btn');
        statusBtn.classList.remove('bg-base-300');
        statusBtn.classList.add('bg-green-100', 'text-green-500', 'border', 'border-green-500');


        // change the card border style
        card.classList.remove('border-l-2', 'border-green-500', 'border-red-500');
        card.classList.add('border-l-2', 'border-green-500');

    }

    // Handle Rejected button
    else if (target.classList.contains('rejected-btn')) {
        const card = target.closest('.card');



        // change the style button
        const statusBtn = card.querySelector('.status-btn');
        statusBtn.classList.remove('bg-base-300');
        statusBtn.classList.add('bg-red-100', 'text-red-500', 'border', 'border-red-500');
        statusBtn.innerText = 'Rejected';
        
        // change the card border style
        card.classList.remove('border-l-2', 'border-green-500', 'border-red-500');
        card.classList.add('border-l-2', 'border-red-500');
    }
});