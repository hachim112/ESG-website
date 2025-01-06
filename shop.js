document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');
    const closePopup = document.querySelector('.close-popup');
    const buyButtons = document.querySelectorAll('.product-card button');
    
    // دالة لفتح النافذة المنبثقة
    function openPopup() {
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden'; // منع التمرير في الخلفية
    }

    // دالة لإغلاق النافذة المنبثقة
    function closePopupFunction() {
        popup.style.display = 'none';
        document.body.style.overflow = 'auto'; // إعادة تفعيل التمرير
    }
    
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const title = productCard.querySelector('h3').textContent;
            const price = productCard.querySelector('p').textContent;
            const image = productCard.querySelector('img').src;
            
            document.getElementById('popup-title').textContent = title;
            document.getElementById('popup-price').textContent = price;
            document.getElementById('popup-image').src = image;
            
            openPopup();
        });
    });
    
    // إغلاق النافذة المنبثقة
    closePopup.addEventListener('click', closePopupFunction);
    
    // إغلاق النافذة المنبثقة عند النقر خارجها
    popup.addEventListener('click', function(event) {
        if (event.target === popup) {
            closePopupFunction();
        }
    });

    // إضافة إمكانية الإغلاق باستخدام زر ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closePopupFunction();
        }
    });
});

// إضافة الـ keyframes للرسالة المتحركة
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style); 

document.getElementById('add-to-cart').addEventListener('click', function() {
    // تحريك أيقونة العربة
    const cartIcon = this.querySelector('.cart-icon');
    cartIcon.style.animation = 'cartMove 0.5s ease';
    
    // إنشاء رسالة النجاح
    const successMessage = document.createElement('div');
    successMessage.className = 'cart-success';
    successMessage.innerHTML = `
        <i class="fas fa-shopping-cart"></i>
        <span>Item added to cart successfully!</span>
    `;
    document.body.appendChild(successMessage);
    
    // إظهار الرسالة
    setTimeout(() => {
        successMessage.classList.add('show');
    }, 100);

    // حذف الرسالة بعد 3 ثواني
    setTimeout(() => {
        successMessage.classList.remove('show');
        setTimeout(() => {
            successMessage.remove();
        }, 500);
    }, 3000);

    // إزالة الرسم المتحرك من الأيقونة
    cartIcon.addEventListener('animationend', function() {
        this.style.animation = '';
    });

    // إضافة المنتج للسلة (الكود الموجود مسبقاً)
    const title = document.getElementById('popup-title').textContent;
    const size = document.getElementById('size').value;
    // ... باقي الكود
});

// تحسين تفاعل الزر
document.getElementById('add-to-cart').addEventListener('mouseover', function() {
    const cartIcon = this.querySelector('.cart-icon');
    cartIcon.style.transform = 'scale(1.1)';
});

document.getElementById('add-to-cart').addEventListener('mouseout', function() {
    const cartIcon = this.querySelector('.cart-icon');
    cartIcon.style.transform = 'scale(1)';
});

document.addEventListener('DOMContentLoaded', function() {
    const buyNowPopup = document.getElementById('buy-now-popup');
    const closeBuyNow = document.querySelector('.close-buy-now');
    const buyNowButton = document.getElementById('buy-now');
    
    // فتح نافذة الشراء
    buyNowButton.addEventListener('click', function() {
        const title = document.getElementById('popup-title').textContent;
        const price = document.getElementById('popup-price').textContent;
        const image = document.getElementById('popup-image').src;
        
        document.getElementById('buy-now-product-name').textContent = title;
        document.getElementById('buy-now-product-price').textContent = price;
        document.getElementById('buy-now-product-image').src = image;
        
        buyNowPopup.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    
    // إغلاق نافذة الشراء
    closeBuyNow.addEventListener('click', function() {
        buyNowPopup.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // التحقق من صحة رقم البطاقة
    document.getElementById('card-number').addEventListener('input', function(e) {
        this.value = this.value.replace(/\D/g, '');
    });
    
    // تنسيق تاريخ الانتهاء
    document.getElementById('expiry').addEventListener('input', function(e) {
        let value = this.value.replace(/\D/g, '');
        if (value.length > 2) {
            value = value.slice(0,2) + '/' + value.slice(2);
        }
        this.value = value;
    });
    
    // التحقق من CVV
    document.getElementById('cvv').addEventListener('input', function(e) {
        this.value = this.value.replace(/\D/g, '');
    });
    
    // معالجة تأكيد الشراء
    document.getElementById('confirm-purchase').addEventListener('click', function() {
        // هنا يمكنك إضافة التحقق من صحة البيانات ومعالجة الطلب
        alert('Thank you for your purchase!');
        buyNowPopup.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
});