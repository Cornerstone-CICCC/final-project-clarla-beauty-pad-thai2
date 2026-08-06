document.addEventListener('DOMContentLoaded', () => {
    //Event type selected

    $(".event-type-option").on('click', function () {
        $(".event-type-option").removeClass("is-selected");
        $(this).addClass("is-selected");
    });

    //Contact type selected
    $('input[name="contact_way"]').on('change', function () {
        $('.contact-field, .contact-field-mail').addClass('hidden');
        $(this).siblings('.contact-field, .contact-field-mail').removeClass('hidden');
    });

    //Get the event date
    const eventDateInput = document.querySelector('#event-date');
    const notDecidecDate = document.querySelector('#not-decided-date');

    if (eventDateInput && notDecidecDate) {
        eventDateInput.addEventListener('focus', () => {
            if (eventDateInput.disabled) return;

            if ('showPicker' in HTMLInputElement.prototype) {
                eventDateInput.showPicker();
            }
        });

        notDecidecDate.addEventListener('change', (event) => {
            if (event.target.checked) {
                eventDateInput.disabled = true;
                eventDateInput.value = "";
            } else {
                eventDateInput.disabled = false;
            }
        });
    }

    //when someone click submit(Get value and set the validation), 

    const submitBtn = document.querySelector('#submit');

    if (submitBtn) {
        submitBtn.addEventListener('click', (event) => {
            //1 Stop loading a page (default setting)
            event.preventDefault();

            //2 Get value and Check the blank in each sections
            //2-1 event type - ok
            const selectedEventType = document.querySelector('input[name="event-type"]:checked');
            const selectedEventTypeValue = selectedEventType ? selectedEventType.value : 'Not selected';

            //2020 event date - ok
            let finalDateValue = '';

            if (notDecidecDate.checked) {
                finalDateValue = 'Not decided';
            } else {
                finalDateValue = eventDateInput.value !== '' ? eventDateInput.value : 'Not selected';
            }

            if(!notDecidecDate.checked && (!eventDateInput || eventDateInput.value === '')){
                alert('Please select an event date or check "Not decided"');
                return;
            }

            //2-3 event time - ok
            const timeSelect = document.querySelector('#time');
            const notDecidedTime = document.querySelector('#not-decided-time');

            const TimeNotDecided = notDecidedTime.checked;
            const selectedTime = timeSelect.value;

            if(!TimeNotDecided && selectedTime === ''){
                alert('Please select an event time or check "Not decided"');
                return;
            }

            let eventTimeValue = '';
            if (TimeNotDecided) {
                eventTimeValue = 'Not decided';
            } else {
                eventTimeValue = selectedTime;
            }

            

            //2-4 name - ok
            const nameInput = document.querySelector('#name');
            const nameValue = nameInput.value;
            if(nameValue === ''){
                alert('Please fill in your name');
                return;
            }

            //2-5 contact -ok
            const selectedContact = document.querySelector('input[name="contact_way"]:checked');
            const selectedContactValue = selectedContact ? selectedContact.value : 'Not selected';

            if (!selectedContact) {
                alert('Please choose the contact ways');
                return;
            }

            const parentDiv = selectedContact.closest('div');
            const contactInput = parentDiv.querySelector('input[type="tel"], input[type="mail"]');

            if (contactInput && contactInput.value.trim() === '') {
                alert('Please fill in the contact');
                return;
            }

            const contactInputValue = contactInput ? contactInput.value.trim() : '';
            // console.log(selectedContactValue)
            // console.log(contactInputValue)

            //2-6 calling-time - ok
            const callingTime = document.querySelector('input[name="calling-time"]:checked');
            const callingTimeValue = callingTime ? callingTime.value : 'Not selected';


            //3　Check the values
            console.log({
                eventType: selectedEventTypeValue,
                eventDate: finalDateValue,
                eventTime: eventTimeValue,
                name: nameValue,
                contactWay: selectedContactValue,
                contactDetail: contactInputValue,
                callingTime: callingTimeValue
            })
            //4　The feedback to users
            alert('Form submitted successfully!');
        })
    }



})











