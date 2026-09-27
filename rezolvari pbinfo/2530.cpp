#include <iostream>

using namespace std;

int main() {
    int n;
    if (!(cin >> n)) return 0;

    int total_rows = 2 * n - 1;
    int width = 2 * n - 1;

    for (int i = 0; i < total_rows; ++i) {
        // Determinăm numărul de caractere '#' de pe lateral (distanța față de margine)
        int dist = (i < n) ? i : (total_rows - 1 - i);
        
        // Afișăm caracterele '#' din stânga
        for (int j = 0; j < dist; ++j) {
            cout << '#';
        }
        
        // Afișăm caracterele '*'
        int stars = width - 2 * dist;
        for (int j = 0; j < stars; ++j) {
            cout << '*';
        }
        
        // Afișăm caracterele '#' din dreapta
        for (int j = 0; j < dist; ++j) {
            cout << '#';
        }
        
        cout << '\n';
    }

    return 0;
}