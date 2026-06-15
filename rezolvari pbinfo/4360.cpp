#include <iostream>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    
    // Extragem cifrele primului număr
    int a1 = a / 100;
    int a2 = (a / 10) % 10;
    int a3 = a % 10;
    
    // Extragem cifrele celui de-al doilea număr
    int b1 = b / 100;
    int b2 = (b / 10) % 10;
    int b3 = b % 10;
    
    // Calculăm produsul, suma și suma pătratelor pentru fiecare număr
    // Dacă două numere au aceleași cifre, atunci aceste valori sunt egale
    int suma_a = a1 + a2 + a3;
    int suma_b = b1 + b2 + b3;
    
    int produs_a = a1 * a2 * a3;
    int produs_b = b1 * b2 * b3;
    
    int suma_patrate_a = a1*a1 + a2*a2 + a3*a3;
    int suma_patrate_b = b1*b1 + b2*b2 + b3*b3;
    
    if (suma_a == suma_b && produs_a == produs_b && suma_patrate_a == suma_patrate_b) {
        cout << "DA" << endl;
    } else {
        cout << "NU" << endl;
    }
    
    return 0;
}