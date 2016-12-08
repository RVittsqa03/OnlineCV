angular.module("products", [])
    .controller("productCtrl", function($scope){


        // A list of products in JSON form
        $scope.productsList = [
            {
                id: 1,
                name: "Kettle",
                description: "Steel Electric Kettle",
                category: "Kitchen",
                stock: 100,
                price: 55.00},
            {
                id: 2,
                name: "Fridge freezer",
                description: "Fridge + freezer large",
                category: "kitchen",
                stock: 45,
                price: 799.00},
            {
                id: 3,
                name: "Portable Music Player",
                description: "250GB music player (MP3, MP4, WMA, WAV)",
                category: "Audio",
                stock: 5,
                price: 99.00},
            {
                id: 4,
                name: "13inch Laptop",
                description: "HP laptop, 8GB RAM, 250GB SSD",
                category: "Computer",
                stock: 45,
                price: 799.00},
            {
                id: 5,
                name: "8inch Tablet",
                description: "Android 5.1 Tablet, 32GB storage, 8inch screen",
                category: "Computer",
                stock: 5,
                price: 99.00},
            {
                id: 6,
                name: "46inch TV",
                description: "Sony 4K, OLED, Smart TV",
                category: "Television",
                stock: 12,
                price: 2799.00},
            {
                id: 7,
                name: "Washing Machine",
                description: "1600rpm spin, A+++ rated, 10KG",
                category: "Laundry",
                stock: 50,
                price: 699.00},
            {
                id: 8,
                name: "Phone",
                description: "Windows 10, 5.2inch OLED, 3GB RAM, 64GB Storage",
                category: "Mobile Phone",
                stock: 45,
                price: 799.00},
            {
                id: 9,
                name: "10inch Tablet",
                description: "Windows 10, 128GB storage, 8inch screen",
                category: "Computer",
                stock: 5,
                price: 299.00},
            {
                id: 10,
                name: "Oven",
                description: "Oven + Grill, Stainless Steel",
                category: "Kitchen",
                stock: 10,
                price: 399.00},
            {
                id: 11,
                name: "Bed",
                description: "Super King size, super comfort mattress",
                category: "Furniture",
                stock: 5,
                price: 899.00},
            {
                id: 12,
                name: "Learning JavaScript",
                description: "Become a JavaScript expert in 2 hours!",
                category: "Book",
                stock: 50,
                price: 29.00}
        ];

        // Used to keep a record of which product is being edited
        var editIndex = null;

        // init product model
        $scope.product = {};


        // Add a new product to the list
        $scope.addProduct = function(){
            // Check if editIndex was set (indicates edit)
            if (editIndex != null)
            {
                // Product exists - update
                $scope.productsList[editIndex] = angular.copy($scope.product);
                editIndex = null;
            }
            else
            {
                // New product - add
                // Generate the next ID (count products in array + 1)
                var pIndex = $scope.productsList.length + 1;

                // set the product id
                $scope.product.id = pIndex;

                // Add product to the list
                $scope.productsList.push($scope.product);
            }
            // delete product to unbind from form
            $scope.reset();
        }


        // Select product for editing
        $scope.editProduct = function (p) {


            // Deep copy the selected p to $scope.product (bound to the form)
            $scope.product = angular.copy(p);

            // Keep a copy of the index of this object in the Products array
            editIndex = $scope.productsList.indexOf(p);
        }

        // Remove product from list
        $scope.deleteProduct = function(product){
            // Use a dialog to confirm delete
            if (confirm("Are you sure you want to delete product id " + product.id + "?")) {
                // Find the object index in the array
                var index = $scope.productsList.indexOf(product);

                // Use JavaScript Splice function to remove the product from the array
                $scope.productsList.splice(index, 1);
            }
        }

        // Deselect product
        $scope.reset = function () {
            $scope.product = {};
        }

    });

/* http://jsfiddle.net/benfosterdev/UWLFJ/ */