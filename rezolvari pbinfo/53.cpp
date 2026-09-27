#include <iostream>
using namespace std;

int main() {
	int nr, count = 0;
    do {
    	cin >> nr;
        if(nr % 2 == 1) {
            count += 1;
        }
    } while(nr != 0);
    cout << count;
}